import { space } from 'styled-system'
import styled from 'styled-components'
import { BaseRatingProps } from './Rating.types'
import { Rating } from '@material-ui/lab'

export const AppRating: React.FC<BaseRatingProps> = styled(Rating)<
  BaseRatingProps
>`
  ${space}
`
