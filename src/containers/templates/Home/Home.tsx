/**
 *
 * Home
 *
 */

import React, { FC } from 'react'
import GridLayout from 'components/atoms/GridLayout'
import { HomeProps } from './Home.types'
import Wrapper from 'components/atoms/Wrapper'
import { Container } from '@material-ui/core'
import Header from 'containers/organisms/Header'
import Banner from 'containers/organisms/Banner'
import SubscribeArea from 'containers/organisms/SubscriptionTile'
import Footer from 'containers/organisms/Footer'

const Home: FC<HomeProps> = (props: HomeProps) => {
  const {
    header: HeaderPart = Header,
    banner: BannerPart = Banner,
    children,
    subscribe: SubscribePart = SubscribeArea,
    footer: FooterPart = Footer,
  } = props
  return (
    <Container>
      <GridLayout gridTemplateAreas='"80px auto 240px" "100%"'>
        <Wrapper py="8px">
          <HeaderPart />
        </Wrapper>
        <Wrapper
          minHeight="calc(100vh - 320px)"
          display="flex"
          flexDirection="column"
        >
          {BannerPart ? <BannerPart /> : null}
          {children}
          {SubscribePart ? (
            <Wrapper mt="auto">
              <SubscribePart />
            </Wrapper>
          ) : null}
        </Wrapper>
        <FooterPart />
      </GridLayout>
    </Container>
  )
}

export default Home
