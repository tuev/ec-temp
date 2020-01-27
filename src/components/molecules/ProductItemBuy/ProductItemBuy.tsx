/**
 *
 * ProductItemBuy
 *
 */

import React, { useMemo, FC, useReducer, useCallback } from 'react'
import Card from 'components/atoms/Card'
import Typography from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Wrapper from 'components/atoms/Wrapper'

import ColorSelect from 'components/molecules/ColorSelect'
import SizeSelect from 'components/molecules/SizeSelect'

import { Grid } from '@material-ui/core'

import { ProductItemBuyProps, ReducerType } from './ProductItemBuy.types'
import mock from './mock/mock.png'

import {
  ProductItemWrapper,
  ProductItemBackground,
  InfoCustomWrapper,
} from './ProductItemBuy.styled'

/* --------------------------------- Reducer -------------------------------- */

const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.value,
      }
    case 'CHANGE_SIZE':
      return {
        ...state,
        size: action.value,
      }
  }
}

const ProductItemBuy: FC<ProductItemBuyProps> = (
  props: ProductItemBuyProps
) => {
  const {
    id = '',
    name = 'this is product name',
    price = '',
    sizes = ['M', 'L', 'XL', 'XXL', 'S'],
    colors = ['red', 'green', 'blue'],
    handleBuy,
  }: ProductItemBuyProps = props
  const productName = useMemo(
    () => (name.length > 30 ? `${name.slice(0, 29)}...` : name),
    [name]
  )

  const [buyOption, dispatch] = useReducer(reducer, {
    color: colors[0],
    size: sizes[0],
  })

  const onSizeChange = useCallback(
    value => dispatch({ type: 'CHANGE_SIZE', value }),
    []
  )

  const onColorChange = useCallback(
    value => dispatch({ type: 'CHANGE_COLOR', value }),
    []
  )

  const handleClickBuy = useCallback(
    () => handleBuy && handleBuy({ id, ...buyOption }),
    [buyOption, handleBuy, id]
  )

  return (
    <Card>
      <ProductItemWrapper>
        <Wrapper>
          <Typography
            customvariant="header3"
            align="center"
            data-testid="product-item-info-name"
          >
            {productName}
          </Typography>
          <Typography customvariant="header2" color="error" align="center">
            {price}
          </Typography>
          <InfoCustomWrapper>
            <SizeSelect
              sizes={sizes}
              type="select"
              onChange={onSizeChange}
              value={buyOption.size}
            />
            <ColorSelect
              colors={colors}
              value={buyOption.color}
              onChange={onColorChange}
            />
          </InfoCustomWrapper>
        </Wrapper>
        <Wrapper>
          <Grid container={true} spacing={2}>
            <Wrapper
              width={'100%'}
              justifyContent="center"
              display="flex"
              p="8px"
            >
              <Button
                size="small"
                onClick={handleClickBuy}
                data-testid="product-item-buy-btn"
              >
                Buy now
              </Button>
            </Wrapper>
            <Wrapper
              width={'100%'}
              justifyContent="center"
              display="flex"
              p="8px"
            >
              <Button size="small">Wishlist</Button>
            </Wrapper>
          </Grid>
        </Wrapper>
      </ProductItemWrapper>
      <ProductItemBackground image={mock} />
    </Card>
  )
}

export default ProductItemBuy
