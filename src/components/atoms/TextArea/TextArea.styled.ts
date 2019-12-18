import styled from 'styled-components'
import { COLOR } from 'theme/colors'
import { BaseTextAreaProps } from './TextArea.types'
import { createMuiTheme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

import { space } from 'styled-system'
export const AppTextArea: React.FC<BaseTextAreaProps> = styled(TextField)<
  BaseTextAreaProps
>`
  ${space}
  height: 121px;
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
