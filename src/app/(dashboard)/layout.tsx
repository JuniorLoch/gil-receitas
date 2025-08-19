'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Box, HStack, Skeleton, Stack } from '@chakra-ui/react'
import { Header } from './components/main-layout/header'
import { Sidebar } from './components/main-layout/sidebar'
import { isAuthHydrating } from '../components/auth-context/selectors'
import { useAuth } from '../components/auth-context/context'
import { loginRoute } from '../components/route-guard/routes.const'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userData, loading } = useAuth()
  const router = useRouter()

  const hydrating = isAuthHydrating(loading)
  const isAuthenticated = Boolean(userData)

  useEffect(() => {
    //DOC - Redirect only after hydration resolves; avoid redirect loops during initial null
    if (!hydrating && !isAuthenticated) {
      router.replace(loginRoute)
    }
  }, [hydrating, isAuthenticated, router])

  if (hydrating) {
    //OBS - Initial auth resolving: render a tiny shell/skeleton to avoid null user crashes
    return (
      <Stack gap={0} overflow={'hidden'} maxH={'100vh'}>
        <Skeleton h={50} />
        <HStack gap={0} align={'start'}>
          <Skeleton h={800} maxH={'calc(100vh - 50px)'} w={'250px'} />
        </HStack>
      </Stack>
    )
  }

  if (!isAuthenticated) {
    //OBS - We just triggered a redirect; render nothing to prevent flicker
    return null
  }

  //OBS - Authenticated and ready: children can safely assume userData is non-null
  return (
    <Stack gap={0} overflow={'hidden'} maxH={'100vh'}>
      <Header />
      <HStack gap={0} align={'start'}>
        <Sidebar />
        <Box p={2} w={'100%'} maxH={'calc(100vh - 68px)'} overflow={'auto'}>
          {children}
        </Box>
      </HStack>
    </Stack>
  )
}
