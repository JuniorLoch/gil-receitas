import { Card, CardRootProps, Heading } from '@chakra-ui/react'

interface GilCardProps extends CardRootProps {
  title: string
}

export function GilCard({ children, title, ...rest }: GilCardProps) {
  return (
    <Card.Root size='sm' variant={'outline'} {...rest}>
      <Card.Header>
        <Heading size='md'> {title}</Heading>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  )
}
