import { createMuiTheme } from '@material-ui/core/styles'
import { space } from 'styled-system'
import { COLOR } from 'theme/colors'
import styled, { css } from 'styled-components'
import { BaseTypographyProps } from './Typography.types'
import { Typography } from '@material-ui/core'
import { switchProp } from 'styled-tools'

export const AppTypography = styled(Typography)<BaseTypographyProps>`
  ${space};
  ${switchProp('customvariant', {
    body1: css`
      font-size: 16px !important;
      line-height: 1.5 !important;
      font-family: 'Open Sans' !important;
    `,
    body2: css`
      font-size: 12px !important;
      line-height: 2 !important;
      font-family: 'Open Sans' !important;
    `,
    header1: css`
      font-size: 48px !important;
      line-height: 1.5 !important;
      font-family: 'Playfair Display' !important;
      font-weight: bold !important;
    `,
    header2: css`
      font-size: 24px !important;
      line-height: 1.5 !important;
      font-family: 'Montserrat Alternates' !important;
      font-weight: bold !important;
    `,
    header3: css`
      font-size: 16px !important;
      line-height: 1.5 !important;
      font-family: 'Montserrat Alternates' !important;
      font-weight: bold !important;
    `,
    topbar: css`
      font-size: 16px !important;
      line-height: 2.4 !important;
      font-family: 'Montserrat Alternates' !important;
      font-weight: bold !important;
    `,
  })}
`

export const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: COLOR.white,
      dark: '#4592f7',
      light: '#beddfe',
      main: COLOR.blue,
    },
  },
})
