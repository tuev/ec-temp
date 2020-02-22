import React from 'react'

import './App.css'

import Home from 'containers/templates/Home'
import Header from 'containers/organisms/Header'
import SubscriptionTile from 'containers/organisms/SubscriptionTile'
import Footer from 'containers/organisms/Footer'
import { Typography } from '@material-ui/core'
import Banner from 'containers/organisms/Banner'
import Wrapper from 'components/atoms/Wrapper'

const props = {
  header: Header,
  subscribe: SubscriptionTile,
  footer: Footer,
  banner: Banner,
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Home {...props}>
        <Wrapper p="1rem">
          <Typography>This is content inside</Typography>
        </Wrapper>
      </Home>
    </div>
  )
}

export default App
