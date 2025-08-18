'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { homeRoute, loginRoute, publicRoutes } from './routes.const'
import { useAuth } from '../auth-context/context'

type RouteGuardProps = {
  children: React.ReactNode
}

export function RouteGuard({ children }: RouteGuardProps) {
  const { userData, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    console.log('loading: ', loading)
    console.log('!loading.Credentials && !loading.Google: ', !loading.Credentials && !loading.Google)
    if (!loading.Credentials && !loading.Google) {
      const isAuthenticated = Boolean(userData)
      console.log('isAuthenticated: ', isAuthenticated)
      const isPublicRoute = publicRoutes.has(pathname)
      console.log('isPublicRoute: ', isPublicRoute)

      if (isAuthenticated) {
        console.log('loginRoute: ', loginRoute)
        if (pathname === loginRoute) {
          router.replace(homeRoute)
        }
      } else {
        if (!isPublicRoute) {
          router.replace(loginRoute)
        }
      }
    }
  }, [loading, userData, pathname, router])

  return <>{children}</>
}
