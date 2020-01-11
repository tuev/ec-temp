/**
 *
 * Wrapper
 *
 */

import React, { FC } from 'react'
import { WrapperProps } from './Wrapper.types'
import { WrapperComponent } from './Wrapper.styled'

const Wrapper: FC<WrapperProps> = (props: WrapperProps) => {
  return <WrapperComponent {...props} />
}

export default Wrapper
