/**
 *
 * Styled for ProductItemInfo
 *
 */

import { FC } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { IProductImageProps } from './ProductInfo.types'

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 335px;
  justify-content: space-between;
}
`

export const ProductItemInfoWrapper = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`

export const TagWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export const ProducImage: FC<IProductImageProps> = styled('div')<
  IProductImageProps
>`
  background-image: url(${prop('image')});
  background-size: contain;
  background-position: center;
  min-height: 165px;
  background-repeat: no-repeat;
`

export const ProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px 0;
`

export const ProductActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`
