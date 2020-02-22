import { prop } from 'styled-tools'
import styled from 'styled-components'

import { space } from 'styled-system'
import { BaseBurgerIconProps } from './BurgerIcon.types'
import { COLOR, ColorValues } from 'theme/colors'

export const AppBurgerIcon: React.FC<BaseBurgerIconProps> = styled.button<
  BaseBurgerIconProps
>`
  ${space};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${prop('size', '2rem')};
  height: ${prop('size', '2rem')};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: ${prop('size', '2rem')};
    height: 0.25rem;
    background: ${({ color = 'primary' }): ColorValues => COLOR[color]};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }): string =>
        open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ open }): string => (open ? '0' : '1')};
      transform: ${({ open }): string =>
        open ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ open }): string =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
