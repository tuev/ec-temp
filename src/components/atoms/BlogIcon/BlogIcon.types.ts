type BlogIconType = 'like' | 'comment' | 'bookmark' | 'options'

interface IBlogIcon extends React.HTMLProps<HTMLDivElement> {
  icon?: BlogIconType
  count?: number
}

export declare type BaseBlogIconProps = IBlogIcon

export type GetIcon = (icon?: BlogIconType) => React.ReactNode
