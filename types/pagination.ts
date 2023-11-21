export interface Pagination<T> {
  totalCount?: number
  totalPages?: number
  currentPage?: number
  items: T[]
}

export interface PaginationVariables {
  page?: Number
  limit?: Number
}
