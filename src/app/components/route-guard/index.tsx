'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { homeRoute, loginRoute, publicRoutes } from './routes.const'
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
    if (!hydrating) {
      const isAuthenticated = Boolean(userData)
      const isPublicRoute = publicRoutes.has(pathname)

      if (isAuthenticated) {
        if (pathname === loginRoute) {
          router.replace(homeRoute)
        }
      } else {
        if (!isPublicRoute) {
          router.replace(loginRoute)
        }
      }
    } else {
    }
  }, [pathname, userData, loading])

  return <>{children}</>
}
