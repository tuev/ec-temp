/**
 *
 * Wrapper
 *
 */

import React, { memo, FC } from 'react'
import { WrapperProps } from './Wrapper.types'
import { Wrapper } from './Wrapper.styled'

const WrapperComponent: FC<WrapperProps> = (props: WrapperProps) => {
  return <Wrapper {...props} />
}

export default memo(WrapperComponent)
