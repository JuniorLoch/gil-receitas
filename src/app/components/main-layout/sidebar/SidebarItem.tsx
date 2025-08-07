import { HStack, Icon, List, Text } from '@chakra-ui/react'
import { SidebarItemProps } from './sidebar-itens.const'
import Link from 'next/link'

interface SidebarItemComponentProps extends SidebarItemProps {
  isCollapsed: boolean
}

export function SidebarItem({ icon, text, link, isCollapsed }: SidebarItemComponentProps) {
  return (
    <List.Item asChild p={2} cursor='pointer' _hover={{ _dark: { bg: 'blue.500' }, _light: { bg: 'blue.300' } }}>
      <Link href={link}>
        <HStack gap={0} transition={'all 250ms'} {...(isCollapsed && { _hover: { transform: 'translate(10px)' } })}>
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
