import React, { FC, useMemo } from 'react'
import { AppTypography, theme } from './Typography.styled'
import { BaseTypographyProps } from './Typography.types'
import { ThemeProvider } from '@material-ui/core/styles'
import { COLOR } from 'theme/colors'
import { keys } from 'lodash'

const Typography: FC<BaseTypographyProps> = (props: BaseTypographyProps) => {
  // const { customcolor, ...rest } = props
  // const typocustomcolor = useMemo(() => getColor(customcolor), [customcolor])

  return (
    <ThemeProvider theme={theme}>
      <AppTypography {...props} />
    </ThemeProvider>
  )
}

export default Typography
