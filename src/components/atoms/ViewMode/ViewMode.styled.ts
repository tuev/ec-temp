import { createMuiTheme } from '@material-ui/core/styles'
import { space } from 'styled-system'
import { PrimaryPalette } from 'theme/colors'
import styled from 'styled-components'

import { Fab } from '@material-ui/core'

export const AppViewMode: React.FC = styled(Fab)<{ cheked?: boolean }>`
  ${space}
  width: 40px !important;
  height: 40px !important;
`

export const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: PrimaryPalette.contrastText,
      dark: PrimaryPalette.dark,
      light: PrimaryPalette.light,
      main: PrimaryPalette.main,
    },
  },
})
