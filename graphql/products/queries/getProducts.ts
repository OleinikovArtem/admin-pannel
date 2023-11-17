import { gql } from '@apollo/client/core'

import { Pagination } from '../../../../models/Pagination'
import { Product } from '../../../../models/Product'

export type GET_PRODUCTS = {
  products: Pagination<Product>
}

export const defaultResultGetProducts = { currentPage: 0, totalPages: 0, totalCount: 0, items: [] }

export const getProducts = gql`
  query getProducts($page: Int = 1, $limit: Int = 10, $categories: [String!]) {
    products(page: $page, limit: $limit, categories: $categories) {
      totalCount
      totalPages
      currentPage
      items {
        name
        id
        imageUrl
        price
        description
        isPublish
        categories {
          name
          id
        }
      }
    }
  }
`
