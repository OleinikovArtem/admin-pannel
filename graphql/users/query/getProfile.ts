import { gql } from '@apollo/client/core'
import { User } from '@/types/user'

export type GET_PROFILE_TYPE = {
  profile: User
}

export const GET_PROFILE = gql`
  query getProfile {
    profile {
      id
      email
      image
      name
      role
    }
  }
`
