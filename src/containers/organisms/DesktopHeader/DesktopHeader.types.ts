export interface IHeaderItem {
  key: string
  title: string
  href: string
}

export type DesktopHeaderProps = {
  items: IHeaderItem[]
}
