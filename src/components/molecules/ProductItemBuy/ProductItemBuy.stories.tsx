/**
 *
 *  Stories for ProductItemBuy
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductItemBuy from './ProductItemBuy'
import { Grid } from '@material-ui/core'

export default {
  component: ProductItemBuy,
  includeStories: ['basic'],
  title: 'ProductItemBuy',
}

export const basic = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <ProductItemBuy price="1$" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy price="2$" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy price="3$" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy price="4$" />
    </Grid>
  </Grid>
)

export const grid4 = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <ProductItemBuy price="4$" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy price="4$" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy price="4$" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy price="4$" />
    </Grid>
  </Grid>
)

export const grid3 = () => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <ProductItemBuy price="4$" />
    </Grid>
    <Grid item xs={4}>
      <ProductItemBuy price="4$" />
    </Grid>
    <Grid item xs={4}>
      <ProductItemBuy price="4$" />
    </Grid>
  </Grid>
)
