/**
 *
 *  Stories for ProductItem
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductItem from './ProductItem'
import { Grid } from '@material-ui/core'
import data from './mock/data.mock'
import Wrapper from 'components/atoms/Wrapper'
import GridLayout from 'components/atoms/GridLayout'

export default {
  component: ProductItem,
  includeStories: ['basic'],
  title: 'ProductItem',
}

export const basic = () => (
  <GridLayout
    gridTemplateColumns={{
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
    }}
    gridColumnGap="8px"
    gridRowGap="8PX"
  >
    {data.map((item, index) => (
      <Wrapper p="8px">
        <ProductItem {...item} key={index} />
      </Wrapper>
    ))}
  </GridLayout>
)
