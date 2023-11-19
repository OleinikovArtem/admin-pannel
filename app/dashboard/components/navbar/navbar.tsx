'use client'

import { usePathname } from 'next/navigation'
import { Breadcrumb } from '@/app/dashboard/components/navbar/breadcrumb'

export const Navbar = () => {
  const pathname = usePathname()

  const listOfPaths = pathname.split('/').filter((i) => i)

  return (
    <div className="w-full p-4 border-b-2">
      <Breadcrumb list={listOfPaths} />
    </div>
  )
}
