import { BreadcrumbsProps } from '@material-ui/core/Breadcrumbs'

export interface IBreadCrumbItem {
  href: string
  title: string
}

export interface IBreadCrumbProp {
  links: IBreadCrumbItem[]
  active: string
}

export declare type BaseBreadcrumbsProps = IBreadCrumbProp & BreadcrumbsProps
