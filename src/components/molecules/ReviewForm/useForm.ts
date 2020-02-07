import { useState, useEffect, useCallback, useReducer } from 'react'
import {
  IReviewFormValidator,
  IReviewValidatorRule,
  IReviewHookForm,
  ReviewFormReducer,
  ValidationFormFields,
} from './ReviewForm.types'

const REVIEW_FORM_CHANGE_VALUE = 'REVIEW_FORM_CHANGE_VALUE'
const REVIEW_FORM_CHANGE_ERROR = 'REVIEW_FORM_CHANGE_ERROR'
const REVIEW_FORM_TOGGLE_DIRTY = 'REVIEW_FORM_TOGGLE_DIRTY'
const VALUE = 'value'
const ERROR = 'error'
const DIRTY = 'dirty'
const REQUIRED_FIELD_ERROR = 'This is required field'

/**
 * Determines a value if it's an object
 *
 * @param {object} value
 */
function isObject(value: IReviewValidatorRule | undefined): boolean {
  return typeof value === 'object' && value !== null
}

/**
 *
 * @param {string} value
 * @param {boolean} isRequired
 */
function isRequired(value: unknown, isRequired?: boolean): string {
  if (!value && isRequired) return REQUIRED_FIELD_ERROR
  return ''
}

const reducer: ReviewFormReducer = (initState, action) => {
  switch (action.type) {
    case REVIEW_FORM_CHANGE_VALUE:
      return {
        ...initState,
        [action.payload.name]: {
          ...initState[action.payload.name],
          [VALUE]: action.payload.data,
        },
      }
    case REVIEW_FORM_CHANGE_ERROR:
      return {
        ...initState,
        [action.payload.name]: {
          ...initState[action.payload.name],
          [ERROR]: action.payload.error,
        },
      }
    case REVIEW_FORM_TOGGLE_DIRTY:
      return {
        ...initState,
        [action.payload.name]: {
          ...initState[action.payload.name],
          [DIRTY]: true,
        },
      }
    default:
      return initState
  }
}

const useForm: IReviewHookForm = (
  stateSchema,
  stateValidatorSchema,
  submitFormCallback
) => {
  const store = { ...stateSchema }
  const [disable, setDisable] = useState(true)
  const [isDirty, setIsDirty] = useState(false)

  const validateFormFields: ValidationFormFields = useCallback(
    (name, value) => {
      const validator: IReviewFormValidator = stateValidatorSchema
      const field = validator[name]
      let error = ''
      const fieldValidator: IReviewValidatorRule | undefined =
        field['validator']

      error = isRequired(value, field.required)

      if (fieldValidator && isObject(fieldValidator) && error === '') {
        // Test the function callback if the value is meet the criteria
        const validateInput: Function = fieldValidator['func']
        if (!validateInput(value)) {
          error = fieldValidator['error']
        }
      }

      return error
    },
    [stateValidatorSchema]
  )

  const setInitialErrorState = useCallback(() => {
    Object.keys(store).map(name => {
      store[name][ERROR] = validateFormFields(name, store[name][VALUE])
    })
  }, [store, validateFormFields])

  useEffect(() => {
    setDisable(true)
    setInitialErrorState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [state, dispatch] = useReducer(reducer, store)
  const validateErrorState = useCallback(() => {
    return Object.values(state).some(field => field.error)
  }, [state])

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateErrorState())
    }
  }, [isDirty, validateErrorState])

  const updateInput = useCallback(
    (name, value) => {
      setIsDirty(true)
      const error = validateFormFields(name, value)
      dispatch({
        type: REVIEW_FORM_CHANGE_VALUE,
        payload: {
          name,
          data: value,
        },
      })

      dispatch({
        type: REVIEW_FORM_CHANGE_ERROR,
        payload: {
          name,
          error,
        },
      })

      dispatch({
        type: REVIEW_FORM_TOGGLE_DIRTY,
        payload: {
          name,
        },
      })
    },
    [validateFormFields]
  )

  const handleOnChange = useCallback(
    event => {
      const name = event.target.name
      const value = event.target.value
      updateInput(name, value)
    },
    [updateInput]
  )

  const handleOnRating = useCallback(
    event => {
      const name = 'rating'
      const value = event.target.value
      updateInput(name, value)
    },
    [updateInput]
  )

  const handleOnSubmit = useCallback(() => {
    if (!validateErrorState()) {
      submitFormCallback(state)
    }
  }, [state, validateErrorState, submitFormCallback])

  return {
    handleOnChange,
    handleOnSubmit,
    handleOnRating,
    state,
    disable,
  }
}

export default useForm
