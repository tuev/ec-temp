import { space } from 'styled-system'
import styled from 'styled-components'

import { Rating } from '@material-ui/lab'
import { RatingDefaultProps } from './Rating.types'

export const AppRating: React.FC<RatingDefaultProps> = styled(Rating)<
  RatingDefaultProps
>`
  ${space}
`
