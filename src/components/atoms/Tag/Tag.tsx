import React, { FC, useMemo } from 'react'
import { AppTag } from './Tag.styled'
import { BaseTagProps, GetTagColor, GetTagText } from './Tag.types'
import { COLOR } from 'theme/colors'
import { upperCase } from 'lodash'

export const getTagColor: GetTagColor = (tag, color = 'primary') => {
  switch (tag) {
    case '5min':
      return COLOR.blue
    case 'hot':
      return COLOR.red
    case 'pop':
      return COLOR.orange
    default:
      return COLOR[color]
  }
}

const getTagText: GetTagText = (tag, text) =>
  tag === 'custom' ? upperCase(text) : upperCase(tag)

const Tag: FC<BaseTagProps> = ({
  color = 'primary',
  tag,
  text = '',
  ...rest
}: BaseTagProps) => {
  const tagColor = useMemo(() => getTagColor(tag, color), [color, tag])
  const tagText = useMemo(() => getTagText(tag, text), [tag, text])

  return (
    <AppTag color={tagColor} {...rest}>
      <span>{tagText}</span>
    </AppTag>
  )
}

export default Tag
