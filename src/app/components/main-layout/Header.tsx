'use client'
import { ColorModeButton } from '@/components/ui/color-mode'
import { Flex, Heading, HStack, IconButton, Image } from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa'
import NextImage from 'next/image'
import { appName } from '@/constants/app-name.const'

export function Header() {
  return (
    <Flex justifyContent={'space-between'} bg={'bg.muted'} p={2}>
      <HStack>
        <Image asChild borderRadius='full' fit='cover' alt='Logotipo'>
          <NextImage alt='Logotipo' width={50} height={50} src={'/images/gil-receitas.png'}></NextImage>
        </Image>
        <Heading size='lg'>{appName}</Heading>
      </HStack>

      <Flex color={'gray.50'}>
        <HStack gap='1'>
          <ColorModeButton />

          <IconButton borderRadius={'xl'} size='md' aria-label='user icon'>
            <FaUser />
          </IconButton>
        </HStack>
      </Flex>
    </Flex>
  )
}
