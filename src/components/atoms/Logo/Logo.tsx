/**
 *
 * Logo
 *
 */

import React, { FC } from 'react'
import logoImg from './img/logo_transparent.png'
import { LogoImg } from './Logo.styled'
import { LogoProp } from './Logo.types'

const Logo: FC<LogoProp> = (props: LogoProp) => {
  return <LogoImg {...props} img={logoImg} />
}

export default Logo
