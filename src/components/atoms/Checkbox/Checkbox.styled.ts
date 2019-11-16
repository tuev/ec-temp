import { space } from 'styled-system'
import { COLOR } from 'theme/colors'
import styled from 'styled-components'
import { BaseCheckboxProps } from './Checkbox.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { Checkbox } from '@material-ui/core'

export const AppCheckbox: React.FC<BaseCheckboxProps> = styled(Checkbox)<
  BaseCheckboxProps
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
})
