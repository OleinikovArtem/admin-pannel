import { gql } from '@apollo/client/core'

import { Product } from '../../../../models/Product'

export type GET_PRODUCT = {
  product: Product
}

export const getProduct = gql`
  query getProduct($id: String!) {
    product(id: $id) {
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
`
