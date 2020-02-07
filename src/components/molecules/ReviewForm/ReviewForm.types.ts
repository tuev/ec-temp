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

export interface IReviewFilterData {
  nickname: string
  reviewText: string
  rating: number | string
  [key: string]: string | number
}

export interface IReviewDirty {
  nickname: boolean
  reviewText: boolean
  rating: boolean
  [key: string]: boolean
}

export interface IReviewValidatorRule {
  func(value: string): boolean
  error: string
  [key: number]: string | boolean
}
export interface IReviewFieldValidator {
  required?: boolean
  validator?: IReviewValidatorRule
}

export interface IReviewFormValidator {
  nickname: IReviewFieldValidator
  reviewText: IReviewFieldValidator
  rating: IReviewFieldValidator
  [key: string]: IReviewFieldValidator
}

export type IReviewHookForm = (
  stateSchema: IReviewForm,
  stateValidatorSchema: IReviewFormValidator,
  submitFormCallback: Function
) => {
  handleOnChange(event?: ChangeEvent): void
  handleOnSubmit(event?: unknown): void
  handleOnRating(event: React.FormEvent<HTMLSpanElement>): void
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
