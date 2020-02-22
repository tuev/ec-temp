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

// todo: get data from server for header
import mockData from './mock'

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { data = mockData } = props
  return (
    <Wrapper>
      <DesktopHeader items={data} />
      <MobileHeader items={data} />
    </Wrapper>
  )
}

export default Header
