// components/Image.js
import NextImage, { ImageLoader, ImageProps } from 'next/image'

const customLoader: ImageLoader = ({ src, width, quality }) => {
  console.log('width: ', width)
  console.log('quality: ', quality)

  return src
}

export function GilImage(props: ImageProps) {
  return <NextImage {...props} loader={customLoader} />
}
