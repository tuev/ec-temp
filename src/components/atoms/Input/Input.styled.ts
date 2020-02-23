import { space } from 'styled-system'
import { COLOR } from 'theme/colors'
import styled from 'styled-components'
import { BaseInputProps } from './Input.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

export const AppInput: React.FC<BaseInputProps> = styled(TextField)<
  BaseInputProps
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
