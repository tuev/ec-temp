import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const items: FC = () => (
  <>
    <Link color="inherit" href="/">
      Home
    </Link>
    <Link color="inherit" href="/getting-started/installation/">
      All Categories
    </Link>
    <Typography color="textPrimary">
      Men&apos;s Clothing & Accessories
    </Typography>
  </>
)

export default items
