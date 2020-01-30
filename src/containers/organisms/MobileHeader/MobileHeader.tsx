/**
 *
 * MobileHeader
 *
 */

import React, { FC, useState, useCallback } from 'react'
import { Hidden, Divider, Link, Drawer } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import Logo from 'components/atoms/Logo'
import Wrapper from 'components/atoms/Wrapper'
import { MobileHeaderProps, IHeaderItem } from './MobileHeader.types'
import ProductCart from 'containers/organisms/ProductCart'
import Typography from 'components/atoms/Typography'
import SearchBar from 'components/molecules/SearchBar'
import BurgerIcon from 'components/molecules/BurgerIcon'

const MobileHeader: FC<MobileHeaderProps> = props => {
  const { items = [] } = props
  const [isSideBarOpen, toggleSidebar] = useState<boolean>(false)
  const handleCloseSidebar = useCallback(() => toggleSidebar(false), [])

  return (
    <Hidden mdUp={true}>
      <Wrapper
        minHeight="80px"
        display="flex"
        justifyContent="space-between"
        p="0.5rem"
        alignItems="center"
        position="relative"
        data-testid="mobile-header"
      >
        <Wrapper>
          <Link href="/">
            <Logo size="48px" />
          </Link>
        </Wrapper>
        <Wrapper display="flex">
          <Wrapper mr="1rem">
            <SearchBar />
          </Wrapper>
          <Wrapper mr="1rem">
            <ProductCart />
          </Wrapper>
          <BurgerIcon open={isSideBarOpen} handleOpen={toggleSidebar} />
        </Wrapper>

        <Drawer
          anchor="right"
          open={isSideBarOpen}
          onClose={handleCloseSidebar}
          data-testid="mobile-header-drawer"
        >
          <Wrapper minWidth="75vw" p="1rem" position="relative">
            <Wrapper display="flex" flexDirection="column">
              {items.map((item: IHeaderItem) => (
                <Wrapper key={item.key}>
                  <Link href={item.href}>
                    <Typography customvariant="header2">
                      {item.title}
                    </Typography>
                  </Link>
                </Wrapper>
              ))}
              <Divider />
              <Wrapper mt="1rem">
                <Typography
                  customvariant="header3"
                  animation={1}
                  variant="overline"
                >
                  Login
                </Typography>
              </Wrapper>
            </Wrapper>
            <Wrapper position="absolute" top="1rem" right="1rem">
              <Close
                onClick={handleCloseSidebar}
                data-testid="close-drawer-btn"
              />
            </Wrapper>
          </Wrapper>
        </Drawer>
      </Wrapper>
    </Hidden>
  )
}

export default MobileHeader
