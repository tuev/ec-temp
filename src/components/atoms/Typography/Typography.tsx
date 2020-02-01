import React, { FC } from 'react'
import { AppTypography, theme } from './Typography.styled'
import { BaseTypographyProps } from './Typography.types'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'

const Typography: FC<BaseTypographyProps> = (props: BaseTypographyProps) => {
  // const { customcolor, ...rest } = props
  // const typocustomcolor = useMemo(() => getColor(customcolor), [customcolor])

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst={true}>
        <AppTypography {...props} />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default Typography
