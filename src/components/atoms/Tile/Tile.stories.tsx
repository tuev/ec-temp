/**
 *
 *  Stories for Tile
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Tile from './Tile'
import { COLOR } from 'theme/colors'

export default {
  component: Tile,
  includeStories: ['basic'],
  title: 'Tile',
}

export const basic = () => (
  <Tile
    gridTemplateColumns="20px auto 30px"
    gridTemplateRows="20px 20px 20px"
    background={COLOR.blue}
    border={`1px solid ${COLOR.red}`}
  >
    <Tile gridArea="2/2/span 1/span 1" background={COLOR.yellow} />
  </Tile>
)
