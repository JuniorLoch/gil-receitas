import { ColorModeButton } from '@/app/components/color-mode'
import { Flex, Heading, HStack, Image } from '@chakra-ui/react'
import { APP_NAME } from '@/constants/app-name.const'
import { AvatarMenu } from './AvatarMenu'
import LogoLight from '@images/logo-light.png'
import LogoDark from '@images/logo-dark.png'
import { GilImage } from '@/app/components/GilImage'

export function Header() {
  return (
    <Flex justifyContent={'space-between'} bg={'bg.muted'} p={2}>
      <HStack>
        <Image asChild borderRadius='full' fit='cover' alt='Logotipo' _dark={{ display: 'none' }}>
          <GilImage alt='Logotipo' width={50} height={50} src={LogoLight}></GilImage>
        </Image>
        <Image asChild borderRadius='full' fit='cover' alt='Logotipo' _light={{ display: 'none' }}>
          <GilImage alt='Logotipo' width={50} height={50} src={LogoDark}></GilImage>
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
