import { gql } from '@apollo/client/core'
import { TOKENS } from '../../../authService'

export type REFRESH_TOKEN_VARIABLES = {
  refreshToken: string
}

export type REFRESH_TOKEN = {
  refreshToken: TOKENS
}

export const refreshToken = gql`
  mutation refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`
