import { Grid, GridProps } from '@chakra-ui/react'

export function GilGrid({ children, ...rest }: GridProps) {
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap={2} {...rest}>
      {children}
    </Grid>
  )
}
