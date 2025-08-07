'use client'

import { BiMenu } from 'react-icons/bi'
import { SidebarItem } from './SidebarItem'
import { sidebarItens } from './sidebar-itens.const'
import { Box, HStack, IconButton, List, Stack, useDisclosure } from '@chakra-ui/react'

export function Sidebar() {
  const { onToggle, open } = useDisclosure()

  return (
    <Box
      minH='100vh'
      w={open ? 72 : 10}
      overflow={'hidden'}
      transition='width 0.25s ease'
      borderRightWidth={1}
      borderRightStyle={'solid'}
      bg={'bg.muted'}
      // _dark={{
      //   borderRightColor: 'cyan.700',
      //   backgroundColor: 'blue.800',
      // }}
      // _light={{
      //   borderRightColor: 'grey.700',
      //   backgroundColor: 'blue.50',
      // }}
      zIndex={1}
    >
      <Stack>
        <HStack gap={2}>
          <IconButton
            fontSize='18px'
            variant='ghost'
            onClick={() => {
              onToggle()
            }}
          >
            <BiMenu />
          </IconButton>
        </HStack>
        <List.Root gap={0}>
          {sidebarItens.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={open ? item.text : ''}
              link={item.link}
              isCollapsed={open}
            />
          ))}
        </List.Root>
      </Stack>
    </Box>
  )
}
