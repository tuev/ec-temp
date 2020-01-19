/**
 *
 * Styled for QuantityInput
 *
 */

import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  overrides: {
    MuiFab: {
      sizeSmall: {
        width: '36px',
        height: '36px',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '24px',
        margin: '0 8px',
        width: '72px',
      },
      input: {
        padding: '10px',
      },
    },
  },
})
