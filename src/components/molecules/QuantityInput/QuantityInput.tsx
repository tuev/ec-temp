/**
 *
 * QuantityInput
 *
 */

import React, { FC } from 'react'
import Wrapper from 'components/atoms/Wrapper'
import { Fab, TextField } from '@material-ui/core'
import { Add as AddIcon, Remove as MinusIcon } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './QuantityInput.styled'
import useQuantityHook from './useQuantity'
import { QuantityProps } from './QuantityInput.types'

const QuantityInput: FC<QuantityProps> = props => {
  const { value, onChange }: QuantityProps = props
  const [
    quantity,
    handleQuantityChange,
    { increase, decrease },
  ] = useQuantityHook(value, onChange)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper display="flex" alignItems="center">
        <Fab
          color="secondary"
          size="small"
          onClick={decrease}
          data-testid="decrease-quantity-btn"
        >
          <MinusIcon />
        </Fab>
        <TextField
          variant="outlined"
          type="number"
          inputProps={{ min: 0 }}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Fab
          color="secondary"
          size="small"
          onClick={increase}
          data-testid="increase-quantity-btn"
        >
          <AddIcon />
        </Fab>
      </Wrapper>
    </ThemeProvider>
  )
}

export default QuantityInput
