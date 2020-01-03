/**
 *
 * ProductItem
 *
 */

import React, { memo, FC, useState, useCallback, useMemo } from 'react'
import { ProductItemCard, ProductItemCardWrapper } from './ProductItem.styled'

import { useSpring } from 'react-spring'
import ProductItemInfo from 'components/molecules/ProductItemInfo'
import ProductItemBuy from 'components/molecules/ProductItemBuy'
import Wrapper from 'components/atoms/Wrapper'

import { Close as CloseIcon } from '@material-ui/icons'
import { ProductItemProps } from './ProductItem.types'

const ProductItem: FC<ProductItemProps> = (props: ProductItemProps) => {
  const [isShowBuy, toggleShowBuy] = useState(false)
  const { transform, opacity } = useSpring({
    config: { mass: 5, tension: 500, friction: 80 },
    opacity: isShowBuy ? 1 : 0,
    transform: `perspective(600px) rotateY(${isShowBuy ? 180 : 0}deg)`,
  })
  const { image, colors, sizes, name, price, id } = props
  const handleShowBuy = useCallback(() => toggleShowBuy(true), [toggleShowBuy])
  const handleHideBuy = useCallback(() => toggleShowBuy(false), [toggleShowBuy])

  const productCardCustomTransform = useMemo(
    () => transform.to(t => `${t} rotateY(180deg)`),
    [transform]
  )
  const productCartInfoOpacity = useMemo(() => opacity.to(o => 1 - +o), [
    opacity,
  ])

  return (
    <ProductItemCardWrapper>
      <ProductItemCard
        transform={transform}
        opacity={productCartInfoOpacity}
        z-index={isShowBuy ? 0 : 2}
      >
        <ProductItemInfo
          handleBuy={handleShowBuy}
          price={price}
          name={name}
          image={image}
        />
      </ProductItemCard>
      <ProductItemCard
        opacity={opacity}
        transform={productCardCustomTransform}
        z-index={isShowBuy ? 2 : 0}
      >
        <ProductItemBuy
          id={id}
          colors={colors}
          sizes={sizes}
          price={price}
          name={name}
          image={image}
        />
        <Wrapper position="absolute" top="8px" right="8px">
          <CloseIcon
            onClick={handleHideBuy}
            data-testid="show-product-info-btn"
          />
        </Wrapper>
      </ProductItemCard>
    </ProductItemCardWrapper>
  )
}

export default memo(ProductItem)
