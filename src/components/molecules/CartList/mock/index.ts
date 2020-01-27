import mockImage from './img.png'
import { CartItemProps } from '../CartList.types'

const cartItems: CartItemProps[] = [
  {
    image: mockImage,
    size: 'M',
    quantity: 1,
    name: 'Product name 1',
    id: '123123',
    price: 32,
  },
  {
    image: mockImage,
    size: 'L',
    quantity: 2,
    name: 'Product name 2',
    id: '123122',
    price: 32,
  },
  {
    image: mockImage,
    size: 'XL',
    quantity: 3,
    name: 'Product name 3',
    id: '123124',
    price: 32,
  },
]

export default cartItems
