import { SpaceProps } from 'styled-system'

export interface IImageProps {
  alt: string
  src: string
  width?: number
  height?: number
}

export declare type BaseImageProps = SpaceProps & IImageProps
