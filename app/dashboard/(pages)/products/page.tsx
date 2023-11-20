'use client'
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GET_PRODUCTS, GET_PRODUCTS_TYPE, GET_PRODUCTS_VARIABLES_TYPE } from '@/graphql/products/queries/getProducts'
import { ProductsTable } from '@/app/dashboard/(pages)/products/components/products-table'

export default function Products() {
  const { loading, error, data } = useQuery<GET_PRODUCTS_TYPE, GET_PRODUCTS_VARIABLES_TYPE>(GET_PRODUCTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <ProductsTable products={data?.products} />
    </div>
  )
}
