import { GenericComponent } from '@/interfaces/generic-component'
import { Stack, Button, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { LuPlus } from 'react-icons/lu'

export function RecipeSearchFilters({ children }: GenericComponent) {
  return (
    <>
      <Stack padding={4} mb={2} borderWidth='1px' rounded='l2'>
        {children}
      </Stack>

      <HStack justifyContent={'space-between'}>
        <Button variant='subtle' size='sm' asChild>
          <Link href={'/recipe-virtual/cadastro/novo'}>
            <LuPlus />
            Novo
          </Link>
        </Button>
        <Button variant='solid' size='sm' type='submit'>
          Pesquisar
        </Button>
      </HStack>
    </>
  )
}
