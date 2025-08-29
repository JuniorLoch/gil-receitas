import { ColorModeButton } from '@/app/components/color-mode'
import { Flex, Heading, HStack } from '@chakra-ui/react'
import { APP_NAME } from '@/constants/app-name.const'
import { AvatarMenu } from './AvatarMenu'
import LogoLight from '@images/logo-light.png'
import LogoDark from '@images/logo-dark.png'
import { GilImage } from '@/app/components/GilImage'

export function Header() {
  return (
    <Flex justifyContent={'space-between'} bg={'bg.muted'} p={2}>
      <HStack>
        <GilImage
          borderRadius='full'
          fit='cover'
          _dark={{ display: 'none' }}
          nextProps={{ src: LogoLight, alt: 'Logotipo', width: 50, height: 50 }}
        />

        <GilImage
          borderRadius='full'
          fit='cover'
          _light={{ display: 'none' }}
          nextProps={{ src: LogoDark, alt: 'Logotipo', width: 50, height: 50 }}
        />

        <Heading size='lg'>{APP_NAME}</Heading>
      </HStack>

      <HStack gap={2}>
        <ColorModeButton />

        <AvatarMenu />
      </HStack>
    </Flex>
  )
}
