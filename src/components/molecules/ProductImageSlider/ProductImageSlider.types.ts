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
  transform: (offset: SpringValue<number>) => SpringValue<string>
  springProps: {
    [x: string]: SpringValue<any>
    offset: SpringValue<number>
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
