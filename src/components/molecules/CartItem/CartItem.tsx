/**
 *
 * CartItem
 *
 */

import React, { FC, useCallback, useState, useEffect } from 'react'
import Wrapper from 'components/atoms/Wrapper'
import Typography from 'components/atoms/Typography'
import { COLOR } from 'theme/colors'
import QuantityInput from 'components/molecules/QuantityInput'
import { CartItemProps } from './Cartitem.types'
import { Close } from '@material-ui/icons'

const CartItem: FC<CartItemProps> = (props: CartItemProps) => {
  const {
    price,
    name,
    size,
    id,
    quantity,
    onQuantityChange,
    onRemoveCartItem,
    image,
  }: CartItemProps = props
  const [quantityValue, changeQuantity] = useState(quantity)
  const handleQuantityChange = useCallback(qtt => {
    changeQuantity(qtt)
  }, [])

  const handleRemoveCartItem = useCallback(() => {
    if (onRemoveCartItem) {
      onRemoveCartItem(id)
    }
  }, [id, onRemoveCartItem])

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantityValue, id)
    }
  }, [id, onQuantityChange, quantityValue])

  return (
    <Wrapper display="flex">
      <Wrapper width="96px" alignItems="center" display="flex">
        {image && (
          <img
            src={image}
            style={{
              width: 96,
              height: 96,
              border: `1px solid ${COLOR.black}`,
            }}
          />
        )}
      </Wrapper>
      <Wrapper
        display="flex"
        width="40%"
        flexDirection="column"
        justifyContent="center"
        pl="16px"
      >
        <Typography customvariant="header3">{name}</Typography>
        <Wrapper display="flex" alignItems="center">
          <Wrapper mr="4px">
            <Close color="error" />
          </Wrapper>
          <Typography
            customcolor="red"
            onClick={handleRemoveCartItem}
            data-testid={`remove-cart-item-${id}-btn`}
            animation={1}
          >
            Remove
          </Typography>
        </Wrapper>
      </Wrapper>
      <Wrapper width="50px" alignItems="center" display="flex" p="8px">
        <Typography>{size}</Typography>
      </Wrapper>
      <Wrapper
        alignItems="center"
        display="flex"
        p="8px"
        width="150px"
        justifyContent="center"
      >
        <QuantityInput value={quantity} onChange={handleQuantityChange} />
      </Wrapper>
      <Wrapper
        alignItems="center"
        display="flex"
        p="8px"
        width="80px"
        justifyContent="center"
      >
        <Typography customvariant="header3">{price}</Typography>
      </Wrapper>
    </Wrapper>
  )
}

export default CartItem
