import styled from 'styled-components'
import { InputLabel } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

export const SizeSelectWrapper = styled.div``

export const SizeItemWrapper = styled.div`
  margin: 0 4px;
  display: inline-block;

  button {
    border-radius: 4px;
    min-height: 28px !important;
    min-width: 55px !important;
    line-height: 20px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const SizeInputLabel = styled(InputLabel)`
  /* background-color: white; */
`

export const theme = createMuiTheme({
  props: {
    MuiInputBase: {
      style: {
        backgroundColor: 'white',
        borderRadius: 32,
        width: 120,
      },
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
  },
})
