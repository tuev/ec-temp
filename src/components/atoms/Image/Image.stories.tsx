import React from 'react'

import Image from './Image'

export default {
  component: Image,
  includeStories: ['basic'],
  title: 'AppImage',
}

export const basic = () => <Image src="./img.jpg" alt="shirt" />
