export interface User {
  id: string
  email: string

  role?: string
  image?: string
  name?: string
  phone?: string

  createdAt?: typeof Date
  updatedAt?: typeof Date
}
