import { Category } from '@/types/category'

export interface Product {
  id?: string

  name?: string
  description?: string
  imageUrl?: string
  price?: number
  count?: number

  isPublish?: boolean

  categories?: Category[]

  createdAt?: typeof Date
  updatedAt?: typeof Date
}
