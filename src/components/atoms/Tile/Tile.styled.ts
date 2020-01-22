/**
 *
 * Styled for Tile
 *
 */

import { FC } from 'react'

import styled from 'styled-components'
import { grid, space, background, color, border } from 'styled-system'
import { TileProps } from './Tile.types'

export const TileComponent: FC<TileProps> = styled.div<TileProps>`
  display: grid;
  ${grid};
  ${space};
  ${color};
  ${background};
  ${border};
`
