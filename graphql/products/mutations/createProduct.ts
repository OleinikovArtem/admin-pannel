import { gql } from '@apollo/client/core'

import { Product } from '../../../../models/Product'

export type CreateProductVariables = {
  name: string
  description: string
  imageUrl: string
  price: number
  count: number
  categories?: string[]
}

export type CREATE_PRODUCT = {
  product: Product
}

export const createProduct = gql`
  mutation createProduct(
    $name: String!
    $description: String!
    $imageUrl: String!
    $price: Float!
    $count: Int!
    $categories: [String!]
  ) {
    createProduct(
      description: $description
      name: $name
      imageUrl: $imageUrl

      price: $price
      count: $count
      categories: $categories
    ) {
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
