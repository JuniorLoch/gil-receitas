import { GenericLayout } from '@/interfaces/generic-layout'

import { Box, HStack, Stack } from '@chakra-ui/react'
import { Header } from './components/main-layout/Header'
import { Sidebar } from './components/main-layout/sidebar'

export default function MainLayout({ children }: GenericLayout<undefined>) {
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
