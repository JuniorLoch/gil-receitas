'use client'

import { GilGrid } from '@/app/(dashboard)/components/GilGrid'
import { ColorModeButton } from '@/app/components/color-mode'
import { AspectRatio, GridItem } from '@chakra-ui/react'
import { FormLogin } from './FormLogin'
import { GilImage } from '@/app/components/GilImage'
import BannerLight from '@images/banner-paes-light.png'
import BannerDark from '@images/banner-paes-dark.png'

export default function LoginPage() {
  return (
    <>
      <ColorModeButton position={'absolute'} zIndex={1} right={0} />
      <GilGrid minH={'100vh'} gap={0}>
        <GridItem colSpan={8}>
          <AspectRatio h={'100%'} ratio={16 / 9} _dark={{ display: 'none' }}>
            <GilImage
              nextProps={{
                src: BannerLight,
                alt: 'Imagem do banner de login',
                priority: true,
              }}
            />
          </AspectRatio>
          <AspectRatio h={'100%'} ratio={16 / 9} _light={{ display: 'none' }}>
            <GilImage
              nextProps={{
                src: BannerDark,
                alt: 'Imagem do banner de login',
                priority: true,
              }}
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={4}>
          <FormLogin />
        </GridItem>
      </GilGrid>
    </>
  )
}
