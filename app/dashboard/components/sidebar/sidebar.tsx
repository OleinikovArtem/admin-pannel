import styles from './sidebar.module.scss'
import { menuItems } from './helpers'
import MenuLink from '@/app/dashboard/components/sidebar/menu-link/menu-link'
import { ScrollArea } from '@/components/ui/scroll-area'

export const Sidebar = () => {
  return (
    <ScrollArea className={styles.container}>
      <div className={styles.logo}>CRM SideBar</div>
      <div className={styles.content}>
        <ul className={styles.list}>
          {menuItems.map((category) => (
            <li key={category.title}>
              <span className={styles.cat}>{category.title}</span>
              {category.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  )
}
