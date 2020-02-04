import { ChangeEvent } from 'react'

export interface IReviewField {
  value: string | number
  error: string
  [key: string]: string | number
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

export interface IReviewHookForm {
  handleOnChange(event?: ChangeEvent | object): void
  handleOnSubmit(event?: unknown): void
  handleOnRating(event: React.FormEvent<HTMLSpanElement>): void
  values: IReviewFilterData
  errors: IReviewFilterData
  disable: boolean
}
