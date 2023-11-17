import { gql } from '@apollo/client/core'
import { TOKENS } from '../../../authService'

export type REGISTRATION_VARIABLES = {
  email: string
  password: string
  name: string
}

export type REGISTRATION = {
  registration: TOKENS
}

export const registration = gql`
  mutation registration($email: String!, $password: String!, $name: String!) {
    registration(email: $email, password: $password, name: $name) {
      access_token
      refresh_token
    }
  }
`
