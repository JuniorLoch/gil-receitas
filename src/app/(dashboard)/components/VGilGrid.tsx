import { Grid, GridProps } from '@chakra-ui/react'

export function VGilGrid({ children, ...rest }: GridProps) {
  return (
    <Grid templateRows='repeat(12, 1fr)' gap={2} {...rest}>
      {children}
    </Grid>
  )
}
