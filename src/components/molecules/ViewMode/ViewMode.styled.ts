import { createMuiTheme } from '@material-ui/core/styles'
import { space } from 'styled-system'
import { primaryPalette } from 'theme/colors'
import styled from 'styled-components'

import { Fab } from '@material-ui/core'
import { IViewModeItem, ViewModeValue } from './ViewMode.types'

export const AppViewMode: React.FC<IViewModeItem> = styled(Fab)<{
  checked?: boolean
  customtype: ViewModeValue
  color: 'primary' | 'inherit'
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}>`
  ${space}
  width: 40px !important;
  height: 40px !important;
`

export const theme = createMuiTheme({
  palette: {
    primary: primaryPalette,
  },
})
