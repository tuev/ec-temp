import { useState, useEffect, useCallback } from 'react'
import {
  IReviewFormValidator,
  IReviewValidatorRule,
  IReviewForm,
  IReviewFilterData,
  IReviewHookForm,
} from './ReviewForm.types'

const VALUE = 'value'
const ERROR = 'error'
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

function getPropValues(
  stateSchema: IReviewForm,
  prop: string
): IReviewFilterData {
  return Object.keys(stateSchema).reduce((accumulator, curr) => {
    accumulator[curr] = !prop ? '' : stateSchema[curr][prop]
    return accumulator
  }, {} as IReviewFilterData)
}

/**
 * Custom hooks to validate your Form...
 *
 * @param {object} stateSchema model you stateSchema.
 * @param {object} stateValidatorSchema model your validation.
 * @param {function} submitFormCallback function to be execute during form submission.
 */

const useForm = (
  stateSchema: IReviewForm,
  stateValidatorSchema: IReviewFormValidator,
  submitFormCallback: Function
): IReviewHookForm => {
  const [state, setStateSchema] = useState(stateSchema)

  const [values, setValues] = useState(getPropValues(state, VALUE))
  const [errors, setErrors] = useState(getPropValues(state, ERROR))

  const [disable, setDisable] = useState(true)
  const [isDirty, setIsDirty] = useState(false)

  const validateFormFields = useCallback(
    (name: string, value: string | number) => {
      const validator: IReviewFormValidator = stateValidatorSchema
      if (!validator[name]) return ''

      const field = validator[name]

      let error: string | number = ''
      error = isRequired(value, field.required)

      const fieldValidator: IReviewValidatorRule | undefined =
        field['validator']
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
    Object.keys(errors).map(name => {
      setErrors(prevState => ({
        ...prevState,
        [name]: validateFormFields(name, values[name]),
      }))
    })
  }, [errors, values, validateFormFields])

  useEffect(() => {
    setStateSchema(stateSchema)
    setDisable(true)
    setInitialErrorState()
  }, [stateSchema, setInitialErrorState])

  const validateErrorState = useCallback(() => {
    return Object.values(errors).some(value => value)
  }, [errors])

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateErrorState())
    }
  }, [isDirty, validateErrorState])

  const handleOnChange = useCallback(
    event => {
      console.log(event)
      setIsDirty(true)

      const name = event.target.name
      const value = event.target.value

      const error = validateFormFields(name, value)

      setValues(prevState => ({ ...prevState, [name]: value }))
      setErrors(prevState => ({ ...prevState, [name]: error }))
    },
    [validateFormFields]
  )

  const handleOnSubmit = useCallback(() => {
    if (!validateErrorState()) {
      submitFormCallback(values)
    }
  }, [validateErrorState, submitFormCallback, values])

  return {
    handleOnChange,
    handleOnSubmit,
    values,
    errors,
    disable,
  }
}

export default useForm
