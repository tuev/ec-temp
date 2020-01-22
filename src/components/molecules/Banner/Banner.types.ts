export interface IBanner {
  background?: string
  title: string
  subtitle?: string
  action?: React.MouseEventHandler<HTMLElement>
}

export type BannerProps = IBanner
