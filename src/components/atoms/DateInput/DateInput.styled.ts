import { space } from 'styled-system'
import { COLOR } from 'theme/colors'
import styled from 'styled-components'
import { BaseDateInputProps } from './DateInput.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

export const AppDateInput: React.FC<BaseDateInputProps> = styled(TextField) <
  BaseDateInputProps
  >`
  ${space}
`

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLOR.blue,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: '6px',
      },
      input: {
        paddingTop: '14.5px',
        paddingBottom: '14.5px',
      },
    },
  },
})
