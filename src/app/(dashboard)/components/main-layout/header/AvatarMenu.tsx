import { useDashboardUser } from '@/app/components/auth-context/context'
import { Avatar, Box, HStack, Menu, Portal, Text } from '@chakra-ui/react'
import { FaCog, FaUser, FaUserSlash } from 'react-icons/fa'

export function AvatarMenu() {
  const userData = useDashboardUser()

  return (
    <Menu.Root positioning={{ placement: 'bottom' }}>
      <Menu.Trigger focusRing='outside' rounded={'md'} _hover={{ cursor: 'pointer' }}>
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
            <Menu.Item value='account' p={2}>
              <FaUser />
              Account
            </Menu.Item>
            <Menu.Item value='settings' p={2}>
              <FaCog />
              Settings
            </Menu.Item>
            <Menu.Item value='logout' color='fg.error' _hover={{ bg: 'bg.error', color: 'fg.error' }} p={2}>
              <FaUserSlash />
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
