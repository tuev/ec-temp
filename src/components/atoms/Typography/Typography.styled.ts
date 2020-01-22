import { createMuiTheme } from '@material-ui/core/styles'
import { space } from 'styled-system'
import { COLOR, ColorKey } from 'theme/colors'
import styled, { css } from 'styled-components'
import { BaseTypographyProps } from './Typography.types'
import { Typography } from '@material-ui/core'
import { switchProp, ifProp } from 'styled-tools'

export const AppTypography = styled(Typography)<
  BaseTypographyProps & { animation?: boolean | number; customcolor?: ColorKey }
>`
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
  ${ifProp(
    'animation',
    css`
      background-image: linear-gradient(
        transparent calc(100% - 1px),
        black 1px
      );
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.5s;

      &:hover {
        background-size: 100% 100%;
        cursor: pointer;
      }
    `
  )};
  color: ${(props): string => COLOR[props.customcolor || 'black']};
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
