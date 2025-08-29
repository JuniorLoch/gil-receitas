// components/Image.js
import { Image, ImageProps } from '@chakra-ui/react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

interface GilImageProps extends ImageProps {
  nextProps: NextImageProps
}

//DOC - Desistindo completamente de fazer a otimização de imagem do next funcionar num
//projeto hosteado no firebase, por algum motivo os dois não se conversa bem, o link
//estático não tem nenhum problema, mas a API _next/image não retorna nada além de 404
export function GilImage({ nextProps, ...rest }: GilImageProps) {
  return (
    <Image asChild alt={nextProps.alt} {...rest}>
      <NextImage {...nextProps} unoptimized />
    </Image>
  )
}
