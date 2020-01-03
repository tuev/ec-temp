/**
 *
 *  Stories for Card
 *
 */

import React from 'react'
import { action } from '@storybook/addon-actions'
import Card from './Card'
import { Grid } from '@material-ui/core'

export default {
  component: Card,
  includeStories: ['basic'],
  title: 'Card',
}

export const basic = () => (
  <Grid container={true} spacing={2}>
    <Grid item={true} xs={3}>
      <Card>Item</Card>
    </Grid>
    <Grid item={true} xs={3}>
      <Card>Item</Card>
    </Grid>
    <Grid item={true} xs={3}>
      <Card>Item</Card>
    </Grid>
    <Grid item={true} xs={3}>
      <Card>Item</Card>
    </Grid>
  </Grid>
)
