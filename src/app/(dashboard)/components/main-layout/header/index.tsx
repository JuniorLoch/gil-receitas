import { ColorModeButton } from '@/app/components/color-mode'
import { Flex, Heading, HStack, Image } from '@chakra-ui/react'
import NextImage from 'next/image'
import { APP_NAME } from '@/constants/app-name.const'

import { AvatarMenu } from './AvatarMenu'

export function Header() {
  return (
    <Flex justifyContent={'space-between'} bg={'bg.muted'} p={2}>
      <HStack>
        <Image asChild borderRadius='full' fit='cover' alt='Logotipo'>
          <NextImage alt='Logotipo' width={50} height={50} src={'/images/logo-light.png'}></NextImage>
        </Image>
        <Heading size='lg'>{APP_NAME}</Heading>
      </HStack>

      <HStack gap={2}>
        <ColorModeButton />

        <AvatarMenu />
      </HStack>
    </Flex>
  )
}
