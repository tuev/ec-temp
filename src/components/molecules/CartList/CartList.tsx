/**
 *
 * CartList
 *
 */

import React, { FC } from 'react'
import Typography from 'components/atoms/Typography'
import Wrapper from 'components/atoms/Wrapper'
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'

import { CartListProps, ICartItem } from './CartList.types'
import QuantityInput from '../QuantityInput'
import { CartItemImage } from './CartList.styled'

import useCartListHandler from './useCartListHandler'

const CartList: FC<CartListProps> = (props: CartListProps) => {
  const { items = [], onCartItemChange } = props
  const [state, stateCount, quantityChange, removeItem] = useCartListHandler(
    items,
    onCartItemChange
  )

  return (
    <Wrapper>
      <Typography customvariant="header2">
        {stateCount} items in your cart
      </Typography>
      {stateCount ? (
        <Table aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography>Image</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>Size</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>Quantity</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>Price</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((item: ICartItem) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row" align="left">
                  <Wrapper alignItems="center" display="flex">
                    {item.image && <CartItemImage src={item.image} />}
                  </Wrapper>
                </TableCell>
                <TableCell align="left">
                  <Wrapper
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Typography customvariant="header3">{item.name}</Typography>
                    <Wrapper display="flex" alignItems="center">
                      <Close color="error" />
                      <Typography
                        customcolor="red"
                        onClick={removeItem(item.id)}
                        data-testid={`remove-cart-item-${item.id}-btn`}
                        animation={1}
                      >
                        Remove
                      </Typography>
                    </Wrapper>
                  </Wrapper>
                </TableCell>
                <TableCell align="center">
                  <Typography>{item.size}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Wrapper
                    alignItems="center"
                    display="flex"
                    p="8px"
                    justifyContent="center"
                  >
                    <QuantityInput
                      value={item.quantity}
                      onChange={quantityChange(item.id)}
                    />
                  </Wrapper>
                </TableCell>
                <TableCell align="center">
                  <Wrapper>
                    <Typography customvariant="header3">
                      {item.price}
                    </Typography>
                  </Wrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </Wrapper>
  )
}

export default CartList
