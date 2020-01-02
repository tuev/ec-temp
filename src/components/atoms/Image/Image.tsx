import React, { FC } from 'react'
import { AppImage } from './Image.styled'
import { BaseImageProps } from './Image.types'

const Image: FC<BaseImageProps> = (props: BaseImageProps) => (
  <AppImage {...props} />
)

export default Image
