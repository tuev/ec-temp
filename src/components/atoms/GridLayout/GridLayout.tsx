/**
 *
 * GridLayout
 *
 */

import React, { FC } from 'react'
import { GridLayoutProp } from './GridLayout.types'
import { GridWrapper } from './GridLayout.styled'

const GridLayout: FC<GridLayoutProp> = (props: GridLayoutProp) => {
  return <GridWrapper {...props} />
}

export default GridLayout
