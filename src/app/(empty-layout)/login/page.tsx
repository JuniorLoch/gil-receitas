'use client'

import { GilGrid } from '@/app/(main-layout)/components/GilGrid'
import { ColorModeButton } from '@/components/ui/color-mode'
import { AspectRatio, Box, Flex, GridItem } from '@chakra-ui/react'
import { FormLogin } from './FormLogin'
import bannerLoginImageLight from '@images/banner-paes-light.png'
import bannerLoginImageDark from '@images/banner-paes-dark.png'
import NextImage from 'next/image'

export default function LoginPage() {
  // const { colorMode } = useColorMode()

  return (
    <>
      <ColorModeButton position={'absolute'} zIndex={1} right={0} />
      <GilGrid minH={'100vh'} gap={0}>
        <GridItem colSpan={8}>
          <AspectRatio h={'100%'} ratio={16 / 9} _dark={{ display: 'none' }}>
            <NextImage src={bannerLoginImageLight} alt='Imagem do banner de login' priority />
          </AspectRatio>
          <AspectRatio h={'100%'} ratio={16 / 9} _light={{ display: 'none' }}>
            <NextImage src={bannerLoginImageDark} alt='Imagem do banner de login' priority />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={4}>
          <FormLogin />
        </GridItem>
      </GilGrid>
    </>
  )
}
