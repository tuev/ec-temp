export interface IHeaderItem {
  key: string
  title: string
  href: string
}

export type MobileHeaderProps = {
  items: IHeaderItem[]
}
