/**
 *
 * Breadcrumbs
 *
 */

import React, { FC } from 'react'
import { BaseBreadcrumbsProps } from './Breadcrumbs.types'
import { AppBreadcrumbs } from './Breadcrumbs.styled'

const Breadcrumbs: FC<BaseBreadcrumbsProps> = (props: BaseBreadcrumbsProps) => {
  return (
    <AppBreadcrumbs separator="•" aria-label="breadcrumb">
      {props.children}
    </AppBreadcrumbs>
  )
}

export default Breadcrumbs
