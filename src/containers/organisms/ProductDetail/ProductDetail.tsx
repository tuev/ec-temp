/**
 *
 * ProductDetail
 *
 */

import React, { FC, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import ProductImageSlider from 'components/molecules/ProductImageSlider'
import Wrapper from 'components/atoms/Wrapper'
import Breadcrumbs from 'components/atoms/Breadcrumbs'
import Typography from 'components/atoms/Typography'

import Rating from 'components/atoms/Rating'
import { ProductDetailProps } from './ProductDetail.types'
import ColorSelect from 'components/molecules/ColorSelect'
import SizeSelect from 'components/molecules/SizeSelect'
import QuantityInput from 'components/molecules/QuantityInput'
import Button from 'components/atoms/Button'

import useProductSelect from './useProductSelect'

const ProductDetail: FC<ProductDetailProps> = (props: ProductDetailProps) => {
  const {
    id,
    images = [],
    breadcrumbLinks = [],
    activeBreadcrumb = 'product',
    rating = 1,
    name = '',
    price = '',
    colors = [],
    sizes = [],
    quantity = 1,
    handleBuy,
  }: ProductDetailProps = props

  const [options, onOptionsChange] = useProductSelect({
    color: colors[0],
    size: sizes[0],
    quantity,
  })

  const handleBuyClick = useCallback(() => {
    if (handleBuy) {
      handleBuy({
        id,
        ...options,
      })
    }
  }, [handleBuy, id, options])

  return (
    <Grid container={true}>
      <Grid item={true} xs={12} md={4}>
        <Wrapper p="1rem">
          <ProductImageSlider images={images} />
        </Wrapper>
      </Grid>
      <Grid item={true} xs={12} md={8}>
        <Wrapper p="1rem">
          <Wrapper mb="1rem">
            <Breadcrumbs links={breadcrumbLinks} active={activeBreadcrumb} />
          </Wrapper>
          <Rating value={rating} />

          <Wrapper>
            <Wrapper>
              <Typography customvariant="header2">{name}</Typography>
              <Typography customvariant="header2" customcolor="red">
                {price}
              </Typography>
            </Wrapper>

            <Wrapper py="0.5rem" mt="1rem">
              <Typography customvariant="header3" customcolor="black1">
                Color
              </Typography>
              <ColorSelect
                colors={colors}
                value={options.color}
                onChange={onOptionsChange.color}
              />
            </Wrapper>

            <Wrapper py="0.5rem">
              <Typography customvariant="header3" customcolor="black1">
                Size
              </Typography>
              <SizeSelect
                sizes={sizes}
                value={options.size}
                onChange={onOptionsChange.size}
              />
            </Wrapper>

            <Wrapper py="0.5rem">
              <Typography customvariant="header3" customcolor="black1">
                Quantity
              </Typography>
              <QuantityInput
                value={options.quantity}
                onChange={onOptionsChange.quantity}
              />
            </Wrapper>

            <Wrapper py="1rem">
              <Button
                onClick={handleBuyClick}
                data-testid="product-detail-buy-btn"
              >
                Add to cart
              </Button>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Grid>
    </Grid>
  )
}

export default ProductDetail
