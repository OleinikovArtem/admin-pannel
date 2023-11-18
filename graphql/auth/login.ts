import { gql } from '@apollo/client/core'
import { TOKENS } from '@/types/auth'

export type LOGIN_VARIABLES_TYPE = {
  email: string
  password: string
}

export type LOGIN_TYPE = {
  login: TOKENS
}

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`
