import { IProductFilterOptions } from '../ProductFilter.types'
const filterOptions: IProductFilterOptions = {
  brand: {
    brand1: {
      label: 'Brand 1',
      value: true,
    },
    brand2: {
      label: 'Brand 2',
      value: false,
    },
  },
  color: ['black', 'green', 'yellow', 'red', 'blue', 'orange'],
  price: [5, 95],
  size: ['S', 'M', 'L', 'XS', 'XXL'],
}

export { filterOptions }
