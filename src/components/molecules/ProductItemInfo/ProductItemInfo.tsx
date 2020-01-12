/**
 *
 * ProductItemInfo
 *
 */

import React, { FC, useMemo, useCallback } from 'react'
import {
  ImageWrapper,
  ProductInfoWrapper,
  ProductItemInfoWrapper,
  TagWrapper,
  ProducImage,
  ProductActionWrapper,
  ProductItemWrapper,
} from './ProductItemInfo.styled'
import Typography from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Tag from 'components/atoms/Tag'
import Card from 'components/atoms/Card'
import mockImage from './mock/mock.png'
import { ProductItemProps } from './ProductInfo.types'

const ProductItem: FC<ProductItemProps> = (props: ProductItemProps) => {
  const { image = mockImage, name = '', price, handleBuy } = props
  const productName = useMemo(
    () => (name.length > 30 ? `${name.slice(0, 29)}...` : name),
    [name]
  )

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      handleBuy && handleBuy(e),
    [handleBuy]
  )

  return (
    <Card>
      <ProductItemWrapper>
        <ProductItemInfoWrapper>
          <ImageWrapper>
            <TagWrapper>
              <Tag tag="hot" />
            </TagWrapper>
            <ProducImage image={image} />
          </ImageWrapper>
          <ProductInfoWrapper>
            <Typography
              customvariant="header3"
              align="center"
              data-testid="product-item-info-name"
            >
              {productName}
            </Typography>
            <Typography customvariant="header3" color="error">
              {price}
            </Typography>
          </ProductInfoWrapper>
        </ProductItemInfoWrapper>
        <ProductActionWrapper>
          <Button
            size="small"
            onClick={handleOnClick}
            data-testid="product-item-info-buy-btn"
            mt="auto"
          >
            Buy now
          </Button>
        </ProductActionWrapper>
      </ProductItemWrapper>
    </Card>
  )
}

export default ProductItem
