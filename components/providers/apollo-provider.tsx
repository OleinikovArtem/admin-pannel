'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

import { API_URL_GRAPHQL } from '@/constants/urls'
import { getRefreshedAccessToken } from '@/lib/authService'

const authLink = setContext(async (_, { headers, ...rest }) => {
  try {
    const token = await getRefreshedAccessToken()

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  } catch (e) {
    console.log(e)
  }
})

function makeClient() {
  const httpLink = new HttpLink({
    uri: API_URL_GRAPHQL,
    fetchOptions: { cache: 'no-store' },
  })

  const links = authLink.concat(httpLink)

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            links,
          ])
        : links,
  })
}

// you need to create a component to wrap your app in
export function ApolloProvider({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
