'use client'

import { useRouter } from 'next/navigation'

import { useMutation } from '@apollo/client'
import { LOGIN, LOGIN_TYPE, LOGIN_VARIABLES_TYPE } from '@/graphql/auth/login'
import * as authService from '@/lib/authService'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FormInput } from '@/components/ui/form/form-input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
})

type Schema = z.infer<typeof formSchema>

export function SignInForm() {
  const router = useRouter()
  const [login] = useMutation<LOGIN_TYPE, LOGIN_VARIABLES_TYPE>(LOGIN)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: Schema) => {
    try {
      const { data, errors } = await login({
        variables: values,
        onError: (error) => {
          alert(error.message)
        },
      })
      if (data?.login) {
        authService.login(data?.login)
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Unexpected error', errors)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
    >
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login to account</CardTitle>
            <CardDescription className="text-center">Enter your email and password to login</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormInput label="Email" id="email" type="email" register={register} error={errors?.email} />
            <FormInput label="Password" id="password" type="password" register={register} error={errors?.password} />
            <span className=" text-blue-600 hover:underline text-sm">Forget password ?</span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">
              Login
            </Button>
          </CardFooter>
          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {' '}
            Have not an account yet?{' '}
            <Link href="/auth?type=sing-up" className=" text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </Card>
      </div>
    </form>
  )
}
