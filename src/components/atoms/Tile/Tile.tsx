/**
 *
 * Tile
 *
 */

import React, { FC } from 'react'
import { TileProps } from './Tile.types'
import { TileComponent } from './Tile.styled'

const Tile: FC<TileProps> = (props: TileProps) => {
  return <TileComponent {...props} />
}

export default Tile
