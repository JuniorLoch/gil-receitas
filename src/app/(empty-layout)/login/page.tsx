'use client'

import { GilGrid } from '@/app/(dashboard)/components/GilGrid'
import { ColorModeButton } from '@/app/components/color-mode'
import { AspectRatio, GridItem } from '@chakra-ui/react'
import { FormLogin } from './FormLogin'

import NextImage from 'next/image'
import { GilImage } from '@/app/components/GilImage'

export default function LoginPage() {
  return (
    <>
      <ColorModeButton position={'absolute'} zIndex={1} right={0} />
      <GilGrid minH={'100vh'} gap={0}>
        <GridItem colSpan={8}>
          <AspectRatio h={'100%'} ratio={16 / 9} _dark={{ display: 'none' }}>
            <GilImage
              src={'/images/banner-paes-light.png'}
              alt='Imagem do banner de login'
              width={1024}
              height={1024}
              priority
            />
          </AspectRatio>
          <AspectRatio h={'100%'} ratio={16 / 9} _light={{ display: 'none' }}>
            <NextImage
              src={'/images/banner-paes-dark.png'}
              alt='Imagem do banner de login'
              width={1024}
              height={1024}
              priority
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
