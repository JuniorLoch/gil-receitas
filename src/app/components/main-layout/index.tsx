import { GenericComponent } from '@/interfaces/generic-component'
import { Box, HStack, Stack } from '@chakra-ui/react'
import { Header } from './Header'
import { Sidebar } from './sidebar'

export function MainLayout({ children }: GenericComponent) {
  return (
    <>
      <Stack gap={0}>
        <Header />
        <HStack gap={0} align={'start'}>
          <Sidebar />
          <Box p={2} w={'100%'} h={'100%'}>
            {children}
          </Box>
        </HStack>
      </Stack>
    </>
  )
}
