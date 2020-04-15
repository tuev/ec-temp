import { useCallback, useReducer, useMemo } from 'react'
import {
  IReviewFormValidator,
  IReviewHookForm,
  ReviewFormReducer,
  ValidationFormFields,
  ReviewItemType,
} from './ReviewForm.types'
import keys from 'lodash/keys'
import get from 'lodash/get'

const REVIEW_FORM_CHANGE_VALUE = 'REVIEW_FORM_CHANGE_VALUE'

export const REQUIRED_FIELD_ERROR = 'This is required field'

/**
 *
 * @param {string} value
 * @param {boolean} isRequired
 */
const isRequired = (checkRequired?: boolean) => (value: unknown): string => {
  if (!value && checkRequired) return REQUIRED_FIELD_ERROR
  return ''
}

export const reducer: ReviewFormReducer = (initState, action) => {
  switch (action.type) {
    case REVIEW_FORM_CHANGE_VALUE:
      return {
        ...initState,
        [action.payload.name]: {
          ...initState[action.payload.name],
          value: action.payload.data,
          error: action.payload.error,
          dirty: true,
        },
      }

    default:
      return initState
  }
}

const useForm: IReviewHookForm = (stateSchema, stateValidatorSchema) => {
  const validateFormFields: ValidationFormFields = useCallback(
    (name, value) => {
      const validator: IReviewFormValidator = stateValidatorSchema
      const field = get(validator, name)
      const validators = [
        isRequired(get(field, 'required', false)),
        (v?: string | number): string =>
          !get(field, 'validator.func', () => false)(v) &&
          get(field, 'validator.error'),
      ]

      const result = validators.find((item) => item(value))
      return result ? result(value) : ''
    },
    [stateValidatorSchema]
  )

  const store = keys(stateSchema).reduce(
    (result, key) => ({
      ...result,
      [key]: {
        ...stateSchema[key],
        error: validateFormFields(key, get(stateSchema, [key, 'value'])),
      },
    }),
    stateSchema
  )

  const [state, dispatch] = useReducer(reducer, store)

  const disable = useMemo(() => {
    return Object.values(state).some((field) => field.error)
  }, [state])

  const updateInput = useCallback(
    (name, value) => {
      const error = validateFormFields(name, value)
      dispatch({
        type: REVIEW_FORM_CHANGE_VALUE,
        payload: {
          name,
          data: value,
          error,
        },
      })
    },
    [validateFormFields]
  )

  const handleOnChange = useCallback(
    (name: ReviewItemType) => (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      const value = event.target.value
      updateInput(name, value)
    },
    [updateInput]
  )

  return {
    handleOnChange,
    state,
    disable,
  }
}

export default useForm
