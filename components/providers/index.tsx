import { ThemeProvider } from '@/components/providers/theme-provider'
import { ApolloProvider } from '@/components/providers/apollo-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ApolloProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ApolloProvider>
  )
}
