/**
 *
 * ProductList
 *
 */

import React, { FC } from 'react'
import Pagination from 'components/molecules/Pagination'
import GridLayout from 'components/atoms/GridLayout'
import Wrapper from 'components/atoms/Wrapper'
import { Grid } from '@material-ui/core'
import ProductItem from 'containers/organisms/ProductItem'
import ProductFilter from 'containers/organisms/ProductFilter'
import { ProductItemProps } from 'containers/organisms/ProductItem/ProductItem.types'
import { IProductFilterValue } from 'containers/organisms/ProductFilter/ProductFilter.types'

const ProductList: FC<{
  items: ProductItemProps[]
  filter: IProductFilterValue
  page: number
  total: number
}> = props => {
  const { total, page, items, filter } = props
  return (
    <Grid container={true}>
      <Grid item={true} sm={12} md={3}>
        <ProductFilter value={filter} />
      </Grid>
      <Grid item={true} sm={12} md={9}>
        <Wrapper display="flex" flexDirection="column">
          <Wrapper>
            <GridLayout
              gridTemplateColumns={{
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              }}
              gridColumnGap="8px"
              gridRowGap="8PX"
            >
              {items.map((item, index) => (
                <Wrapper p="8px" key={item.id}>
                  <ProductItem {...item} key={index} />
                </Wrapper>
              ))}
            </GridLayout>
          </Wrapper>
          <Wrapper p="16px" m="16px auto">
            <Pagination total={total} page={page} />
          </Wrapper>
        </Wrapper>
      </Grid>
    </Grid>
  )
}

export default ProductList
