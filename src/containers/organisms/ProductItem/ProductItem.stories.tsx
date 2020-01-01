/**
 *
 *  Stories for ProductItem
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductItem from './ProductItem'
import { Grid } from '@material-ui/core'

export default {
  component: ProductItem,
  includeStories: ['basic'],
  title: 'ProductItem',
}

export const basic = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <ProductItem />
    </Grid>
    <Grid item xs={3}>
      <ProductItem />
    </Grid>
    <Grid item xs={3}>
      <ProductItem />
    </Grid>
    <Grid item xs={3}>
      <ProductItem />
    </Grid>
    <Grid item xs={4}>
      <ProductItem />
    </Grid>
    <Grid item xs={4}>
      <ProductItem />
    </Grid>
    <Grid item xs={4}>
      <ProductItem />
    </Grid>
  </Grid>
)
