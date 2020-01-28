/**
 *
 * Styled for SearchBar
 *
 */

import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { animated, SpringValue } from 'react-spring'

export const SearchInput = styled(animated(TextField)).attrs(
  ({ opacity, maxwidth }: { maxwidth: string; opacity: string }) => ({
    style: {
      opacity,
      maxWidth: maxwidth,
    },
  })
)<{
  maxwidth: SpringValue<string>
  opacity: SpringValue<number>
}>`
  border-radius: 50%;
`

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`

export const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: '24px',
      },
      input: {
        padding: '8px',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(15px, 8px) scale(1)',
      },
    },
  },
})
