import { IReviewFormValidator } from './ReviewForm.types'

export const ReviewFormConfig: IReviewFormValidator = {
  nickname: {
    required: true,
    validator: {
      func: (value: string): boolean => /^[a-zA-Z]+$/.test(value),
      error: 'Invalid first name format.',
    },
  },
  reviewText: {
    required: true,
    validator: {
      func: (value: string): boolean => value.length > 50,
      error: 'Review must be at least 50 characters.',
    },
  },
  rating: {
    required: true,
    validator: {
      func: (value: string): boolean => Number(value) > 0,
      error: 'Rating must be greater 0.',
    },
  },
}
