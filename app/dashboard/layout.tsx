import type { Metadata } from 'next'

import { Sidebar } from './components/sidebar/sidebar'
import { Navbar } from '@/app/dashboard/components/navbar/navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
