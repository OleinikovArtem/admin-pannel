import { gql } from '@apollo/client/core'
import { TOKENS } from '@/types/auth'

export type REGISTRATION_VARIABLES_TYPE = {
  email: string
  password: string
  name: string
}

export type REGISTRATION_TYPE = {
  registration: TOKENS
}

export const REGISTRATION = gql`
  mutation registration($email: String!, $password: String!, $name: String!) {
    registration(email: $email, password: $password, name: $name) {
      access_token
      refresh_token
    }
  }
`
