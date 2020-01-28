/**
 *
 * Styled for TextField
 *
 */

import { createMuiTheme } from '@material-ui/core/styles'
import { COLOR } from 'theme/colors'

export const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        background: COLOR.white,
        borderRadius: '24px',
      },
    },
  },
})
