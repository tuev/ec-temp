import { space } from 'styled-system'
import { COLOR } from 'theme/colors'
import styled from 'styled-components'
import { BaseNumberInputProps } from './NumberInput.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

export const AppNumberInput: React.FC<BaseNumberInputProps> = styled(TextField)<
  BaseNumberInputProps
>`
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
  shape: {
    borderRadius: 50,
  },
})
