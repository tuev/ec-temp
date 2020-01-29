export interface HeaderItem {
  key: string
  title: string
  href: string
}

export type HeaderProps = {
  data: HeaderItem[]
}
