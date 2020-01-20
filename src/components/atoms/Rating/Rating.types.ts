import { SpaceProps } from 'styled-system'
import { RatingProps } from '@material-ui/lab/Rating'

export type HandleRatingChange = (value: number) => unknown

export type OnRatingChange = (
  e: React.ChangeEvent<{}>,
  value: number | null
) => void

export type RatingHook = (
  value: number,
  onValueChange?: HandleRatingChange
) => [number, OnRatingChange]

export interface IRatingAppProps {
  value: number
}

export type RatingDefaultProps = RatingProps & SpaceProps

export declare type BaseRatingProps = Omit<
  RatingDefaultProps,
  'value' | 'onChange'
> &
  IRatingAppProps & { onChange?: HandleRatingChange }
