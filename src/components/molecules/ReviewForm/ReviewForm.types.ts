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
  rating: number
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
  handleOnChange(event?: unknown): void
  handleOnSubmit(event?: unknown): void
  values: IReviewFilterData
  errors: IReviewFilterData
  disable: boolean
}
