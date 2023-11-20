import styles from './pagination.module.scss'

interface PaginationProps {
  totalPages: number
  currentPage: number
  goToNextPage: () => void
  goToPrevPage: () => void
  goToPage: (page: number) => void
}

export const PaginationPanel = ({ totalPages, currentPage, goToNextPage, goToPrevPage, goToPage }: PaginationProps) => {
  const pages = new Array(totalPages).fill('page')

  return (
    <nav className="flex justify-center py-8">
      <ul className="inline-flex -space-x-px text-sm">
        <li className="w-24" onClick={goToPrevPage}>
          <span className={styles.first}>Previous</span>
        </li>

        {pages.map((page, index) => {
          console.log({ condition: Math.abs(index + 1 - currentPage) < 3, currentPage, index })
          return Math.abs(index + 1 - currentPage) < 3 ? (
            <li key={index} onClick={() => goToPage(index + 1)}>
              <span
                className={`${index + 1 !== currentPage ? styles.item : ''} ${
                  index + 1 === currentPage ? styles.current : ''
                }`}
              >
                {index + 1}
              </span>
            </li>
          ) : null
        })}

        <li className="w-24" onClick={goToNextPage}>
          <span className={styles.last}>Next</span>
        </li>
      </ul>
    </nav>
  )
}
