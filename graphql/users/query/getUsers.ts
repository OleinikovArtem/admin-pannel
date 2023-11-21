import { gql } from '@apollo/client/core'

import { Pagination, PaginationVariables } from '@/types/pagination'
import { User } from '@/types/user'

export type GET_USERS_VARIABLES_TYPE = PaginationVariables

export type GET_USERS_TYPE = {
  users: Pagination<User>
}

export const GET_USERS = gql`
  query getUsers($limit: Int, $page: Int) {
    users(limit: $limit, page: $page) {
      totalCount
      totalPages
      items {
        id
        email
        role
        image
        name
        phone
      }
    }
  }
`
