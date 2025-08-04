import { HStack, Icon, List, Text } from '@chakra-ui/react'
import { SidebarItemProps } from './sidebar-itens.const'
import Link from 'next/link'

export function SidebarItem({ icon, text, link }: SidebarItemProps) {
  return (
    <List.Item asChild>
      <Link href={link}>
        <HStack
          gap={0}
          p={2}
          cursor='pointer'
          _hover={{ _dark: { bg: 'blue.500' }, _light: { bg: 'blue.300' } }}
          rounded='md'
        >
          <List.Indicator asChild>
            <Icon asChild size={'lg'}>
              {icon}
            </Icon>
          </List.Indicator>
          <Text>{text}</Text>
        </HStack>
      </Link>
    </List.Item>
  )
}
