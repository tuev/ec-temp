import { createMuiTheme } from '@material-ui/core/styles'
import { space } from 'styled-system'
import { COLOR, ColorKey } from 'theme/colors'
import styled, { css } from 'styled-components'
import { BaseTypographyProps } from './Typography.types'
import { Typography } from '@material-ui/core'
import { switchProp, ifProp, prop } from 'styled-tools'

export const AppTypography = styled(Typography)<
  BaseTypographyProps & {
    animation?: boolean | number
    customcolor?: ColorKey
    linecolor?: ColorKey
  }
>`
  ${space};
  ${switchProp('customvariant', {
    body1: css`
      font-size: 16px;
      line-height: 1.5;
      font-family: 'Open Sans';
    `,
    body2: css`
      font-size: 12px;
      line-height: 2;
      font-family: 'Open Sans';
    `,
    header1: css`
      font-size: 48px;
      line-height: 1.5;
      font-family: 'Playfair Display';
      font-weight: bold;
    `,
    header2: css`
      font-size: 24px;
      line-height: 1.5;
      font-family: 'Montserrat Alternates';
      font-weight: bold;
    `,
    header3: css`
      font-size: 16px;
      line-height: 1.5;
      font-family: 'Montserrat Alternates';
      font-weight: bold;
    `,
    topbar: css`
      font-size: 16px;
      line-height: 2.4;
      font-family: 'Montserrat Alternates';
      font-weight: bold;
    `,
  })}
  ${ifProp(
    'animation',
    css`
      background-image: linear-gradient(
        transparent calc(100% - 1px),
        ${prop('linecolor', 'black')} 1px
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
