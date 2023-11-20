'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

interface usePaginationProps {
  totalPages: number
}

export const usePagination = ({ totalPages }: usePaginationProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const getCurrentPageFromURL = () => {
    return Number(searchParams.get('page') || 1)
  }

  const [pagination, setPagination] = useState({
    currentPage: getCurrentPageFromURL(),
    totalPages: totalPages,
    hasNextPage: getCurrentPageFromURL() < totalPages,
    hasPrevPage: getCurrentPageFromURL() > 1,
  })

  useEffect(() => {
    const currentPage = getCurrentPageFromURL()
    setPagination((prev) => ({
      ...prev,
      currentPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    }))
  }, [totalPages])

  const updatePage = (newPage: number) => {
    const url = new URL(location.href)
    const params = new URLSearchParams(url.search)

    let newParams = ''
    let first = true
    params.forEach((value, key) => {
      const newValue = key === 'page' ? newPage : value
      newParams = newParams + `${first ? '?' : '&'}${key}=${newValue}`
      first = false
    })

    setPagination((prev) => ({
      ...prev,
      currentPage: newPage,
    }))
    router.push(`${pathname}${newParams}`)
  }

  const goToNextPage = () => {
    const newPage = pagination.currentPage < pagination.totalPages ? pagination.currentPage + 1 : pagination.currentPage
    updatePage(newPage)
  }

  const goToPrevPage = () => {
    const newPage = pagination.currentPage === 1 ? 1 : pagination.currentPage - 1
    updatePage(newPage)
  }

  const goToPage = (page: number) => {
    if (page != 0) updatePage(page)
  }

  return {
    setPagination,
    pagination,
    goToNextPage,
    goToPrevPage,
    goToPage,
  }
}
