'use client'

import { useEffect } from 'react'
import { isAuthCheck } from '@/lib/authService'
import { useRouter } from 'next/navigation'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  useEffect(() => {
    async function init() {
      const isAuth = await isAuthCheck()
      router.push(isAuth ? '/dashboard' : '/auth')
    }

    init()
  }, [])

  return children
}
