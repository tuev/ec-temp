import { ChangeEvent } from 'react'

export interface IReviewField {
  value?: string | number
  error?: string
  dirty: boolean
}

export interface IReviewForm {
  nickname: IReviewField
  reviewText: IReviewField
  rating: IReviewField
  [key: string]: IReviewField
}
export interface IReviewValidatorRule {
  func(value?: string | number): boolean
  error: string
  [key: number]: string | boolean
}
export interface IReviewFieldValidator {
  required?: boolean
  validator?: IReviewValidatorRule
}

export type ReviewItemType = 'nickname' | 'reviewText' | 'rating'

export type IReviewFormValidator = {
  [key in ReviewItemType]: IReviewFieldValidator
}

export type IReviewHookForm = (
  stateSchema: IReviewForm,
  stateValidatorSchema: IReviewFormValidator
) => {
  handleOnChange: (
    name: ReviewItemType
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void
  state: IReviewForm
  disable: boolean
}
export interface IReviewAction {
  type: string
  payload: {
    name: string
    data?: string | number
    error?: string
  }
}

export type ReviewFormReducer = (
  initState: IReviewForm,
  action: IReviewAction
) => IReviewForm

export type ValidationFormFields = (
  name: string,
  value?: string | number
) => string | undefined

export type ReviewFormValue = { [key in ReviewItemType]: string | number }

export interface IReviewFormProps {
  onSubmit?: (data: ReviewFormValue) => unknown
}
