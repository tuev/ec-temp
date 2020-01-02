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
      <ProductItemBuy
        price="1$"
        name="name 1"
        id="1"
        colors={['green']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy
        price="2$"
        name="name 1"
        id="1"
        colors={['green', 'yellow']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy
        price="3$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['red']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
  </Grid>
)

export const grid4 = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={3}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
  </Grid>
)

export const grid3 = () => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={4}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
    <Grid item xs={4}>
      <ProductItemBuy
        price="4$"
        name="name 1"
        id="1"
        colors={['green', 'blue']}
        sizes={['L', 'M', 'XS', 'S']}
      />
    </Grid>
  </Grid>
)
