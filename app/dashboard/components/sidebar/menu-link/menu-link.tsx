'use client'

import Link from 'next/link'
import styles from './menu-link.module.scss'
import { usePathname } from 'next/navigation'
import { MenuItem } from '../helpers'

const MenuLink = ({ item }: { item: MenuItem }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
