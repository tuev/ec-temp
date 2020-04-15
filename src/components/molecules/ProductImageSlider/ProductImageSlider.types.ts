import { SpringValue } from 'react-spring'
import { ReactEventHandlers } from 'react-use-gesture/dist/types'

export type ProductItemSliderOnChange = (slide: number) => unknown

export interface IProductItemSlider {
  images: string[]
  active?: number
}

export type ProductItemSliderProps = IProductItemSlider & {
  onSlideChange?: ProductItemSliderOnChange
}

export interface ISlideHandle {
  toggleSlide: (idx: number) => (event: React.MouseEvent) => void
}

export interface ISlideAnimation {
  // TODO : check type for react-spring after 9.0 released
  transform: (offset: any) => unknown
  springProps: {
    [x: string]: any
    [x: number]: any
    offset: any
  }[]
}

export type ImageSlideHook = (
  images: string[],
  active: number,
  onSlideChange?: ProductItemSliderOnChange
) => [
  number,
  ISlideHandle,
  ISlideAnimation,
  (...args: any[]) => ReactEventHandlers
]
