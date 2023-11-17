'use client'
import { SignUpForm } from '@/app/auth/components/sing-up'
import { SignInForm } from '@/app/auth/components/sing-in'
import { useSearchParams } from 'next/navigation'

type TypeOfForm = 'login' | 'sing-up'

export default function Login() {
  const searchParams = useSearchParams()
  const typeOfForm = searchParams.get('type') as TypeOfForm

  return typeOfForm === 'sing-up' ? <SignUpForm /> : <SignInForm />
}
