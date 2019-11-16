import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'
import { PrimaryPalette } from 'theme/colors'
import { BaseButtonProps } from './Button.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { space } from 'styled-system'

export const AppButton: React.FC<BaseButtonProps> = styled(Button)<
  BaseButtonProps
>`
  ${space}
  ${switchProp(
    'size',
    {
      large: css`
        min-width: 225px !important;
        min-height: 60px !important;
        padding: 20px;
        line-height: 20px;
        font-size: 16px;
        border-radius: 48px;
      `,
      medium: css`
        min-width: 163px !important;
        min-height: 48px !important;
        font-size: 14px;
        border-radius: 32px;
      `,
      small: css`
        min-width: 90px !important;
        min-height: 36px !important;
        font-size: 12px;
        border-radius: 24px;
      `,
    },
    css`
      min-width: 163px !important;
      min-height: 48px !important;
      font-size: 14px;
      border-radius: 32px;
    `
  )}
`

export const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: PrimaryPalette.contrastText,
      dark: PrimaryPalette.dark,
      light: PrimaryPalette.light,
      main: PrimaryPalette.main,
    },
  },
  shape: {
    borderRadius: 32,
  },
  typography: {
    button: {
      fontSize: '0.8rem',
    },
  },
})
