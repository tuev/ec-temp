import { IFooterCategory } from './Footer.types'
export const FooterItem: IFooterCategory[] = [
  {
    category: 'question',
    title: 'Questions',
    items: [
      {
        key: 'help',
        href: '/help',
        title: 'Help',
      },
      {
        key: 'track',
        href: '/trackorder',
        title: 'Track Order',
      },
      {
        key: 'return',
        href: '/returns',
        title: 'Return',
      },
    ],
  },
  {
    category: 'category',
    title: "What's in store",
    items: [
      {
        key: 'women',
        href: '/productlist?category=women',
        title: 'Women',
      },
      {
        key: 'men',
        href: '/productlist?category=men',
        title: 'Men',
      },
      {
        key: 'all',
        href: '/productlist',
        title: 'Product A to Z',
      },
    ],
  },
]

export default FooterItem
