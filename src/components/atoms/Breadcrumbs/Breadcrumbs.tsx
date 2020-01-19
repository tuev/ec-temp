/**
 *
 * Breadcrumbs
 *
 */

import React, { FC } from 'react'
import { BaseBreadcrumbsProps, IBreadCrumbProp } from './Breadcrumbs.types'
import { Link, Breadcrumbs as BreadcrumbsComponent } from '@material-ui/core'
import Typography from 'components/atoms/Typography'

const Breadcrumbs: FC<BaseBreadcrumbsProps> = (props: BaseBreadcrumbsProps) => {
  const { links = [], active }: IBreadCrumbProp = props
  return (
    <BreadcrumbsComponent separator="•" aria-label="breadcrumb">
      {links.map(item => (
        <Link href={item.href} key={item.href}>
          {item.title}
        </Link>
      ))}
      <Typography>{active} </Typography>
      {props.children}
    </BreadcrumbsComponent>
  )
}

export default Breadcrumbs
