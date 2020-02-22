/**
 *
 * DesktopHeader
 *
 */

import React, { FC } from 'react'
import { Hidden, Grid, Link } from '@material-ui/core'
import Logo from 'components/atoms/Logo'
import Wrapper from 'components/atoms/Wrapper'
import { DesktopHeaderProps, IHeaderItem } from './DesktopHeader.types'
import ProductCart from 'containers/organisms/ProductCart'
import Typography from 'components/atoms/Typography'
import SearchBar from 'components/molecules/SearchBar'

const DesktopHeader: FC<DesktopHeaderProps> = props => {
  const { items = [] } = props

  return (
    <Hidden smDown={true}>
      <Grid container={true} alignItems="center" data-testid="desktop-header">
        <Grid item={true} md={1} lg={2}>
          <Link href="/">
            <Logo size="72px" />
          </Link>
        </Grid>
        <Grid item={true} md={5} lg={6}>
          <Wrapper display="flex">
            {items.map((item: IHeaderItem) => (
              <Wrapper key={item.key} px="1.5rem">
                <Link href={item.href}>
                  <Typography customvariant="topbar">{item.title}</Typography>
                </Link>
              </Wrapper>
            ))}
          </Wrapper>
        </Grid>
        <Grid item={true} md={6} lg={4}>
          <Wrapper display="flex" justifyContent="flex-end" alignItems="center">
            <Wrapper px="1rem">
              <SearchBar />
            </Wrapper>
            <Wrapper px="1rem">
              <ProductCart />
            </Wrapper>
            <Wrapper px="1rem">
              <Typography customvariant="header3" animation={1}>
                Login
              </Typography>
            </Wrapper>
          </Wrapper>
        </Grid>
      </Grid>
    </Hidden>
  )
}

export default DesktopHeader
