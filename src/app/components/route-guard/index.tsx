'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  homeRoute,
  loginRoute,
  // , publicRoutes
} from './routes.const'
import { useAuth } from '../auth-context/context'
import { isAuthHydrating } from '../auth-context/selectors'

type RouteGuardProps = {
  children: React.ReactNode
}

export function RouteGuard({ children }: RouteGuardProps) {
  const { userData, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const hydrating = isAuthHydrating(loading)

  useEffect(() => {
    console.log('🚀 COMEÇO DE OPERAÇÃO')
    console.log('userData: ', userData)
    if (!hydrating) {
      console.log('🔷 NÃO HIDRATANDO')
      const isAuthenticated = Boolean(userData)
      // const isPublicRoute = publicRoutes.has(pathname)

      if (isAuthenticated) {
        console.log('🔷 AUTENTICADO')
        if (pathname === loginRoute) {
          console.log('🔷 AUTENTICADO EM LOGIN -> INDO PRA HOME')
          console.log('✅ Fim de operação')
          router.replace(homeRoute)
        }
      } else {
        console.log('🔷 NÃO AUTENTICADO')
        // if (!isPublicRoute) {
        //   console.log('🔷 ROTA NÃO PUBLICA -> INDO PRA LOGIN')
        //   console.log('✅ Fim de operação')
        //   router.replace(loginRoute)
        // }
      }
    } else {
      console.log('🔷 HIDRATANDO')
      console.log('✅ Fim de operação')
    }
  }, [pathname, userData])

  return <>{children}</>
}
