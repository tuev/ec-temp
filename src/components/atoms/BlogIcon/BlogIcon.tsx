import React, { FC, useMemo } from 'react'
import { AppBlogIconWrapper, AppBlogIconCircle } from './BlogIcon.styled'
import { BaseBlogIconProps, GetIcon } from './BlogIcon.types'
import {
  FavoriteBorder,
  ChatBubbleOutline,
  BookmarkBorder,
  MoreHoriz,
} from '@material-ui/icons'

const getIcon: GetIcon = icon => {
  switch (icon) {
    case 'like':
      return <FavoriteBorder color="error" fontSize="small" />
    case 'comment':
      return <ChatBubbleOutline fontSize="small" />
    case 'bookmark':
      return <BookmarkBorder fontSize="small" />
    default:
      return <MoreHoriz fontSize="small" />
  }
}

const BlogIcon: FC<BaseBlogIconProps> = (props: BaseBlogIconProps) => {
  const { icon, count } = props
  const iconRender = useMemo(() => getIcon(icon), [icon])

  return (
    <AppBlogIconWrapper>
      <AppBlogIconCircle>{iconRender}</AppBlogIconCircle>
      {count ? <span>{count}</span> : <span />}
    </AppBlogIconWrapper>
  )
}

export default BlogIcon
