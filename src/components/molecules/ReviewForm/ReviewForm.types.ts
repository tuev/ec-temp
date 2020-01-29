export interface IReview {
  id: string
  authorId: string
  authorName: string
  authorRating: number
  authorOpinion: string
}

export interface IReviewList {
  reviewList: IReview[]
}

export type ReviewFormProps = IReview
