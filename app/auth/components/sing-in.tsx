'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { BiLogoGithub, BiLogoTwitter } from 'react-icons/bi'
import Link from 'next/link'

export function SignInForm() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Login to account
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to login
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <span className=" text-blue-600 hover:underline text-sm">
              Forget password ?
            </span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Login</Button>
          </CardFooter>
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 m-2">
            <Button variant="outline">
              <BiLogoGithub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <BiLogoTwitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {' '}
            Have not an account yet?{' '}
            <Link
              href="/auth?type=sing-up"
              className=" text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  )
}
