import { ThemeProvider } from '@/components/providers/theme-provider'
import { ApolloProvider } from '@/components/providers/apollo-provider'
import { AuthProvider } from '@/components/providers/auth-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export const RootProviders = ({ children }: ProvidersProps) => {
  return (
    <ApolloProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
