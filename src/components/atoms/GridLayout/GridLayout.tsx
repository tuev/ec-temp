/**
 *
 * GridLayout
 *
 */

import React, { FC } from 'react'
import { GridLayoutProp } from './GridLayout.types'
import { GridWrapper } from './GridLayout.styled'
import { ThemeProvider } from 'styled-components'
import * as theme from 'theme/theme'

const GridLayout: FC<GridLayoutProp> = (props: GridLayoutProp) => {
  return (
    <ThemeProvider theme={theme}>
      <GridWrapper {...props} />
    </ThemeProvider>
  )
}

export default GridLayout
