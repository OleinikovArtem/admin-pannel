'use client'

import { usePathname } from 'next/navigation'
import { Breadcrumb } from './breadcrumb'
import { Dropdown } from './dropdown'

export const Navbar = () => {
  const pathname = usePathname()

  const listOfPaths = pathname.split('/').filter((i) => i)
  return (
    <div className="w-full p-4 border-b-2 flex justify-between">
      <Breadcrumb list={listOfPaths} />
      <Dropdown />
    </div>
  )
}
