import { gql } from '@apollo/client/core'

import { Pagination, PaginationVariables } from '@/types/pagination'
import { Product } from '@/types/product'

export type GET_PRODUCTS_VARIABLES_TYPE = PaginationVariables & {
  categories?: String[]
}

export type GET_PRODUCTS_TYPE = {
  products: Pagination<Product>
}

export const GET_PRODUCTS = gql`
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
        count
        categories {
          name
          id
        }
      }
    }
  }
`
