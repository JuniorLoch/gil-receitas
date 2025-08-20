import { useAuth, useDashboardUser } from '@/app/components/auth-context/context'
import { Avatar, Box, HStack, Menu, Portal, Text } from '@chakra-ui/react'
import { FaUser, FaUserSlash } from 'react-icons/fa'
import Link from 'next/link'

export function AvatarMenu() {
  const userData = useDashboardUser()
  const { logout } = useAuth()

  return (
    <Menu.Root positioning={{ placement: 'bottom' }}>
      <Menu.Trigger rounded={'md'} cursor='pointer'>
        <HStack>
          <Text> {userData.displayName}</Text>
          <Box rounded='full'>
            <Avatar.Root size='md'>
              {userData.displayName && <Avatar.Fallback name={userData.displayName} />}
              {userData.photoURL && <Avatar.Image src={userData.photoURL} alt={'user-profile-picture'} />}
            </Avatar.Root>
          </Box>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner w={'3xs'}>
          <Menu.Content>
            <Menu.Item value='account' asChild p={2} cursor={'pointer'}>
              <Link href={'/conta'}>
                <FaUser />
                Conta
              </Link>
            </Menu.Item>
            <Menu.Item
              value='logout'
              onClick={() => logout()}
              color='fg.error'
              _hover={{ bg: 'bg.error', color: 'fg.error' }}
              cursor={'pointer'}
              p={2}
            >
              <FaUserSlash />
              Sair
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
