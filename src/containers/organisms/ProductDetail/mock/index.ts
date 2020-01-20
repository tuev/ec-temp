import { ProductDetailProps } from './../ProductDetail.types'
import img1 from './img2.jpg'
import img2 from './img3.jpg'
import img3 from './img4.jpg'

export const itemInfo: ProductDetailProps = {
  id: '123468761283',
  images: [img1, img2, img3],
  breadcrumbLinks: [{ href: '/', title: 'Home' }],
  activeBreadcrumb: 'product',
  rating: 1,
  name: 'Product name',
  price: '2$',
  colors: ['black', 'blue', 'red', 'yellow', 'green'],
  sizes: ['L', 'M', 'S', 'XL'],
  quantity: 1,
}
