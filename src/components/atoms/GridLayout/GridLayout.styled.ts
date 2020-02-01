/**
 *
 * Styled for GridLayout
 *
 */

import styled from 'styled-components'
import { FC } from 'react'

import {
  grid,
  space,
  border,
  background,
  position,
  layout,
} from 'styled-system'
import { GridLayoutProp } from './GridLayout.types'

export const GridWrapper: FC<GridLayoutProp> = styled.div<GridLayoutProp>`
  display: grid;
  ${grid};
  ${space};
  ${border};
  ${background};
  ${position};
  ${layout};
`
