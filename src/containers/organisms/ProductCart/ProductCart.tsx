/**
 *
 * ProductCart
 *
 */

import React, { FC, useMemo, useState, useCallback } from 'react'
import { ShoppingCart, Close } from '@material-ui/icons'
import Wrapper from 'components/atoms/Wrapper'
import NumberComp from 'components/atoms/NumberComp'
import Modal from 'components/molecules/Modal'
import useProductCart from './useProductCart'
import CartList from 'components/molecules/CartList'
import { ProductCartProps } from './ProductCart.types'
import Button from 'components/atoms/Button'
import { COLOR } from 'theme/colors'
import { ICartItem } from 'components/molecules/CartList/CartList.types'

const ProductCart: FC<ProductCartProps> = (props) => {
  const { data = [], onBuy } = props
  const [isCartOpen, cartHandler] = useProductCart()
  const [cartData, changeCartData] = useState<ICartItem[]>(data)
  const cartCount = useMemo(() => cartData.length, [cartData])
  const handleBuy = useCallback(() => {
    if (onBuy) {
      onBuy(cartData)
    }
  }, [cartData, onBuy])

  return (
    <Wrapper>
      <Wrapper
        position="relative"
        width="2rem"
        height="2rem"
        onClick={cartHandler.show}
        data-testid="product-cart-icon"
      >
        <ShoppingCart fontSize="large" />
        <Wrapper position="absolute" top="-50%" right="-25%">
          <NumberComp data={cartCount} />
        </Wrapper>
      </Wrapper>

      <Modal
        open={isCartOpen}
        onBackdropClick={cartHandler.hide}
        data-testid="product-cart-popup"
      >
        <Wrapper position="relative" display="flex" flexDirection="column">
          <Wrapper position="absolute" top="1rem" right="1rem">
            <Close
              onClick={cartHandler.hide}
              data-testid="product-cart-close-btn"
            />
          </Wrapper>
          <Wrapper px="2rem" py="1rem">
            <CartList data={data} onCartItemChange={changeCartData} />
          </Wrapper>
          <Wrapper
            background={COLOR.gray1}
            p="1rem"
            display="flex"
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              onClick={cartHandler.hide}
              data-testid="product-cart-back-btn"
            >
              Back to shop
            </Button>
            {cartCount ? (
              <Button
                onClick={handleBuy}
                data-testid="product-cart-checkout-btn"
              >
                Checkout
              </Button>
            ) : null}
          </Wrapper>
        </Wrapper>
      </Modal>
    </Wrapper>
  )
}

export default ProductCart
