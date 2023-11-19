import { capitalizeFirstLetter } from '@/lib/utils'
import Link from 'next/link'

interface BreadcrumbProps {
  list: string[]
}

export const Breadcrumb = ({ list }: BreadcrumbProps) => {
  const breadcrumbs = generateBreadcrumbPaths(list)

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {breadcrumbs.map(({ name, path }, index) => (
          <li aria-current="page" key={path}>
            <div className="flex items-center">
              {index !== 0 ? (
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              ) : null}
              <Link href={path} className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {capitalizeFirstLetter(name)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function generateBreadcrumbPaths(breadcrumbs: string[]) {
  return breadcrumbs.reduce(
    (acc, crumb, index) => {
      const path = index === 0 ? `/${crumb.toLowerCase()}` : `${acc[index - 1].path}/${crumb.toLowerCase()}`
      acc.push({ name: crumb, path })
      return acc
    },
    [] as { name: string; path: string }[]
  )
}
