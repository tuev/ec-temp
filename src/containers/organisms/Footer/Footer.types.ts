export interface IFooterItem {
  key: string
  title: string
  href: string
}

export interface IFooterCategory {
  category: string
  items: IFooterItem[]
  title: string
}

export type FooterProp = {
  items?: IFooterCategory[]
}
