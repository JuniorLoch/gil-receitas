// components/Image.js
import NextImage, { ImageProps } from 'next/image'

const customLoader = ({ src }: { src: any }) => {
  return src
}

export function GilImage(props: ImageProps) {
  return <NextImage {...props} loader={customLoader} />
}
