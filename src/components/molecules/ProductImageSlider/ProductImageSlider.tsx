/**
 *
 * ProductImageSlider
 *
 */

import React, { FC } from 'react'

import {
  ImageSliderItem,
  ImageSliderItemWrapper,
  ImageSliderWrapper,
  ThumbnailItem,
} from './ProductImageSlider.styled'
import Wrapper from 'components/atoms/Wrapper'
import { ProductItemSliderProps } from './ProductImageSlider.types'
import useImageSlide from './useImageSlide'

const ProductImageSlider: FC<ProductItemSliderProps> = (
  props: ProductItemSliderProps
) => {
  const {
    images = [],
    onSlideChange,
    active = 0,
  }: ProductItemSliderProps = props

  const [slide, slideHandle, animation, dragHandle] = useImageSlide(
    images,
    onSlideChange,
    active
  )

  const { springProps, transform } = animation
  const { toggleSlide } = slideHandle

  return (
    <div style={{ width: 320 }}>
      <ImageSliderWrapper>
        {springProps.map(({ offset }, index) => (
          <ImageSliderItemWrapper
            key={index}
            transform={transform(offset)}
            {...dragHandle()}
            data-testid={`product-item-slide-${index}`}
          >
            <ImageSliderItem background={images[index]} />
          </ImageSliderItemWrapper>
        ))}
      </ImageSliderWrapper>
      <Wrapper display="flex" justifyContent="space-around" mt="1rem">
        {images.map((item, index) => (
          <ThumbnailItem
            background={item}
            key={index}
            active={index === slide}
            onClick={toggleSlide(index)}
            data-testid={`product-thumbnail-slide-${index}`}
          />
        ))}
      </Wrapper>
    </div>
  )
}

export default ProductImageSlider
