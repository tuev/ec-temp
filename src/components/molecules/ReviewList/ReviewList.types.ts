import { SpaceProps } from 'styled-system'

export interface IReviewItem {
  id: number
  rating: number
  fullname: string
  dateCreated: string
  reviewText: string
  likeCount: number
  commentCount: number
}
export interface IReviewList {
  list?: IReviewItem[]
}

export type BaseReviewListProps = IReviewList

export type BaseReviewRowProps = SpaceProps
