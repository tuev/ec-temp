/**
 *
 * Styled for ProductItemBuy
 *
 */

import { FC } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { IProductImage } from './ProductItemBuy.types'

export const ProductItemWrapper = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;
`

export const InfoCustomWrapper = styled.div`
  display: flex;
  margin: 16px 0;
  align-items: center;
  flex-direction: column;
`

export const SubmitWrapper = styled.div``

export const ProductItemBackground: React.FC<IProductImage> = styled('div')<{
  image: string
}>`
  background-image: url(${prop('image')});
  background-size: contain;
  background-position: center;
  min-height: 165px;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -2;
  opacity: 0.4;
  top: 0;
`
