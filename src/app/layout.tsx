import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Provider } from '@/app/components/provider'

import { Toaster } from './(dashboard)/components/toaster'
import { AuthProvider } from './components/auth-context'
import { RouteGuard } from './components/route-guard'

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gil Receitas',
  description: 'Site de criação de receitas para a família loch',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang='pt-br'>
      <body className={`${montserratSans.variable}`}>
        <Provider>
          <AuthProvider>
            <RouteGuard>
              <Toaster />
              {children}
            </RouteGuard>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  )
}
