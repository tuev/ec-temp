/**
 *
 * Footer
 *
 */

import React, { FC } from 'react'
import { Grid, Link } from '@material-ui/core'
import Wrapper from 'components/atoms/Wrapper'
import Typography from 'components/atoms/Typography'
import footerItems from './Footer.constants'
import { IFooterItem, IFooterCategory, FooterProp } from './Footer.types'

const Footer: FC<FooterProp> = (props: FooterProp) => {
  const { items = footerItems } = props

  return (
    <Wrapper
      p="1rem"
      width={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container={true}>
        {items.map((item: IFooterCategory) => (
          <Grid item={true} xs={12} sm={6} md={3} key={item.category}>
            <Wrapper p="1rem">
              <Typography customvariant="header3">{item.title}</Typography>
              <Wrapper mt="1rem" display="flex" flexDirection="column">
                {item.items.map((child: IFooterItem) => (
                  <Link href={child.href} key={child.key}>
                    <Typography customvariant="body1" variant="overline">
                      {child.title}
                    </Typography>
                  </Link>
                ))}
              </Wrapper>
            </Wrapper>
          </Grid>
        ))}
        <Grid item={true} xs={12} sm={6} md={3}>
          <Wrapper p="1rem">
            <Typography customvariant="header3">Contact us</Typography>
            <Wrapper mt="1rem" display="flex" flexDirection="column">
              <Wrapper>
                <Typography
                  customvariant="body1"
                  animation={1}
                  variant="overline"
                >
                  Facebook
                </Typography>
              </Wrapper>
              <Wrapper>
                <Typography
                  customvariant="body1"
                  animation={1}
                  variant="overline"
                >
                  Twitter
                </Typography>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={3}>
          <Wrapper p="1rem">
            <Typography>&copy;2020 shopify</Typography>
          </Wrapper>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Footer
