'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/app/AuthContext'
import { homeRoute, loginRoute, publicRoutes } from './routes.const'

type RouteGuardProps = {
  children: React.ReactNode
}

export function RouteGuard({ children }: RouteGuardProps) {
  const { userData, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading, userData, pathname, router])

  return <>{children}</>
}
