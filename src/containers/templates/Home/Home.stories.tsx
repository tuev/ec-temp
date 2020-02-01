/**
 *
 *  Stories for Home
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Home from './Home'
import Header from 'containers/organisms/Header'
import SubscriptionTile from 'containers/organisms/SubscriptionTile'
import Footer from 'containers/organisms/Footer'
import { Typography } from '@material-ui/core'
import Banner from 'containers/organisms/Banner'
import Wrapper from 'components/atoms/Wrapper'

export default {
  component: Home,
  includeStories: ['basic'],
  title: 'Home',
}

const props = {
  header: Header,
  subscribe: SubscriptionTile,
  footer: Footer,
  banner: Banner,
}

export const basic = () => (
  <Home {...props}>
    <Wrapper>
      <Typography>This is content inside</Typography>
    </Wrapper>
  </Home>
)
