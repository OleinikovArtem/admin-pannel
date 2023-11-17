import { gql } from '@apollo/client/core'
import { TOKENS } from '../../../authService'

export type LOGIN_VARIABLES = {
  email: string
  password: string
}

export type LOGIN = {
  login: TOKENS
}

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`
