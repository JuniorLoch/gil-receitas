import { HStack, Icon, List, Text } from '@chakra-ui/react'
import { SidebarItemProps } from './sidebar-itens.const'
import Link from 'next/link'

interface SidebarItemComponentProps extends SidebarItemProps {
  isCollapsed: boolean
}

export function SidebarItem({ icon, text, link, isCollapsed }: SidebarItemComponentProps) {
  return (
    <List.Item
      asChild
      className={'group'}
      cursor={'pointer'}
      _hover={{ _dark: { bg: 'blue.500' }, _light: { bg: 'blue.300' } }}
      p={2}
    >
      <Link href={link}>
        <HStack
          w={'100%'}
          gap={0}
          transition={'transform 150ms'}
          {...(isCollapsed && { _groupHover: { transform: 'translate(10px)' } })}
        >
          <List.Indicator asChild>
            <Icon asChild size={'lg'}>
              {icon}
            </Icon>
          </List.Indicator>
          <Text whiteSpace={'nowrap'}>{text}</Text>
        </HStack>
      </Link>
    </List.Item>
  )
}
