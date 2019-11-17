import React from 'react'

import Tag from './Tag'

export default {
  component: Tag,
  title: 'AppTag',
}

export const basic = () => (
  <>
    <Tag tag="5min" />
    <Tag tag="hot" />
    <Tag tag="pop" />
    <Tag tag="sale" />
    <Tag tag="custom" color="green" text="discount" />
  </>
)
