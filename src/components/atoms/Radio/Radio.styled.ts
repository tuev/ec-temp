import { ifProp } from 'styled-tools'
import { space } from 'styled-system'
import { COLOR } from 'theme/colors'
import { BaseRadioProps, getColor } from './Radio.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { Radio } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const getRadioColor: getColor = (props) =>
  COLOR[props.customcolor || 'primary']

export const AppRadio: React.FC<BaseRadioProps> = styled(Radio)<BaseRadioProps>`
  ${space}
  ${ifProp(
    { variant: 'outer' },
    css`
      color: ${getRadioColor} !important;
      svg {
        &:first-child {
          transform: ${ifProp('checked', 'scale(1)', 'scale(0)')};
          transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
        }

        &:last-child {
          transform: scale(1);
        }
      }
    `
  )}
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
