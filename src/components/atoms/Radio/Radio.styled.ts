import { switchProp, prop } from 'styled-tools'
import { space } from 'styled-system'
import { COLOR, colorPalettes } from 'theme/colors'
import { BaseRadioProps } from './Radio.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { Radio } from '@material-ui/core'
import styled, { css } from 'styled-components'
export const AppRadio: React.FC<BaseRadioProps> = styled(Radio)<BaseRadioProps>`
  ${space}
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
