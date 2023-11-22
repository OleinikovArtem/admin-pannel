'use client'
import { usePagination } from '@/hooks/usePagination'
import { GET_USERS, GET_USERS_TYPE, GET_USERS_VARIABLES_TYPE } from '@/graphql/users/query/getUsers'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { PaginationPanel } from '@/components/ui/pagination'
import { UsersTable } from '@/app/dashboard/(pages)/users/components/users-table'

export default function Users() {
  const { pagination, setPagination, goToNextPage, goToPrevPage, goToPage } = usePagination({ totalPages: 0 })
  const { loading, error, data, refetch } = useQuery<GET_USERS_TYPE, GET_USERS_VARIABLES_TYPE>(GET_USERS, {
    variables: { page: pagination.currentPage, limit: 4 },
  })

  useEffect(() => {
    if (data?.users) {
      setPagination({
        ...pagination,
        totalPages: Number(data.users.totalPages),
        currentPage: Number(data.users.currentPage),
      })
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <UsersTable users={data?.users} />
      <PaginationPanel
        totalPages={data?.users.totalPages || 0}
        currentPage={data?.users.currentPage || 1}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        goToPage={goToPage}
      />
    </div>
  )
}
