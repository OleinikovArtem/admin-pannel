'use client'
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql } from '@apollo/client'

const GET_ITEMS = gql`
  query characters {
    characters {
      results {
        id
        image
      }
    }
  }
`

export default function Products() {
  const { loading, error, data } = useQuery(GET_ITEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return <div>{JSON.stringify(data)}</div>
}
