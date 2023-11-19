export interface Pagination<T> {
  totalCount?: number
  totalPages?: number
  currentPage?: number
  items: T[]
}
