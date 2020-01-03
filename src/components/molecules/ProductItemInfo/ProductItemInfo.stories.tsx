/**
 *
 *  Stories for ProductItemInfo
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductItemInfo from './ProductItemInfo'
import { Grid } from '@material-ui/core'

export default {
  component: ProductItemInfo,
  includeStories: ['basic', 'grid4', 'grid3'],
  title: 'ProductItemInfo',
}

export const basic = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <ProductItemInfo price="1$" name="product name" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemInfo price="2$" name="product name" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemInfo price="3$" name="product name" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
  </Grid>
)

export const grid4 = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
    <Grid item xs={3}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
  </Grid>
)

export const grid3 = () => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
    <Grid item xs={4}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
    <Grid item xs={4}>
      <ProductItemInfo price="4$" name="product name" />
    </Grid>
  </Grid>
)
