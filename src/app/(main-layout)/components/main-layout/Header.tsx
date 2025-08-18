'use client'
import { ColorModeButton } from '@/components/ui/color-mode'
import { Flex, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa'
import NextImage from 'next/image'
import { appName } from '@/constants/app-name.const'
import { useAuth } from '@/app/components/auth-context/context'

export function Header() {
  const { userData } = useAuth()

  return (
    <Flex justifyContent={'space-between'} bg={'bg.muted'} p={2}>
      <HStack>
        <Image asChild borderRadius='full' fit='cover' alt='Logotipo'>
          <NextImage alt='Logotipo' width={50} height={50} src={'/images/logo-light.png'}></NextImage>
        </Image>
        <Heading size='lg'>{appName}</Heading>
      </HStack>

      <Flex color={'gray.50'}>
        <HStack gap={2}>
          <ColorModeButton />

          <Text> {userData?.displayName}</Text>

          <IconButton borderRadius={'xl'} size='md' aria-label='user icon'>
            {userData?.photoURL ? (
              <NextImage alt='foto do usuáio' src={userData?.photoURL} width={100} height={100} />
            ) : (
              <FaUser />
            )}
          </IconButton>
        </HStack>
      </Flex>
    </Flex>
  )
}
