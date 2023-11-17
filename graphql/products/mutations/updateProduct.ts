import { gql } from '@apollo/client/core'

import { Product } from '../../../../models/Product'

export type UpdateProductVariables = {
  name: string
  description: string
  imageUrl: string
  price: number
  count: number
  categories?: string[]
}

export type UPDATE_PRODUCT = {
  product: Product
}

export const updateProduct = gql`
  mutation updateProduct(
    $id: String!
    $name: String!
    $description: String!
    $count: Int!
    $price: Float!
    $categories: [String!]
    $imageUrl: String!
    $isPunlish: Boolean
  ) {
    updateProduct(
      id: $id
      isPublished: $isPunlish
      name: $name
      description: $description
      price: $price
      count: $count
      categories: $categories
      imageUrl: $imageUrl
    ) {
      name
      description
      id
      count
      imageUrl
      categories {
        name
      }
    }
  }
`
