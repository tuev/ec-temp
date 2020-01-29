/**
 *
 * Header
 *
 */

import React, { FC } from 'react'
import DesktopHeader from 'containers/organisms/DesktopHeader'
import MobileHeader from 'containers/organisms/MobileHeader'
import Wrapper from 'components/atoms/Wrapper'
import { HeaderProps } from './Header.types'

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { data } = props
  return (
    <Wrapper>
      <DesktopHeader items={data} />
      <MobileHeader items={data} />
    </Wrapper>
  )
}

export default Header
