'use client'

import { useEffect } from 'react'

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GET_PRODUCTS, GET_PRODUCTS_TYPE, GET_PRODUCTS_VARIABLES_TYPE } from '@/graphql/products/queries/getProducts'

import { ProductsTable } from './components/products-table'
import { PaginationPanel } from '@/components/ui/pagination'
import { usePagination } from '@/hooks/usePagination'

export default function Products() {
  const { pagination, setPagination, goToNextPage, goToPrevPage, goToPage } = usePagination({ totalPages: 0 })
  const { loading, error, data, refetch } = useQuery<GET_PRODUCTS_TYPE, GET_PRODUCTS_VARIABLES_TYPE>(GET_PRODUCTS, {
    variables: { page: pagination.currentPage, limit: 4 },
  })

  useEffect(() => {
    if (data?.products) {
      setPagination({
        ...pagination,
        totalPages: Number(data.products.totalPages),
        currentPage: Number(data.products.currentPage),
      })
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <ProductsTable products={data?.products} />
      <PaginationPanel
        totalPages={data?.products.totalPages || 0}
        currentPage={data?.products.currentPage || 1}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        goToPage={goToPage}
      />
    </div>
  )
}
