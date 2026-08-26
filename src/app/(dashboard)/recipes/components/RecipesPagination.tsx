'use client'

import { useRecipesContext } from '@/app/(dashboard)/recipes/RecipesCadastroContext'
import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export function RecipePagination() {
  const { searchFilters, handleSearchRecipeVirtual } = useRecipesContext()

  async function handlePageChange(details: { page: number }) {
    handleSearchRecipeVirtual({
      limit: searchFilters.limit,
      page: details.page,
      titulo: searchFilters.titulo,
      slug: searchFilters.slug,
    })
  }

  return (
    <Pagination.Root
      count={searchFilters.total}
      pageSize={searchFilters.limit}
      page={searchFilters.page}
      onPageChange={handlePageChange}
      siblingCount={4}
      my={2}
    >
      <ButtonGroup variant='ghost' size={'lg'} w={'100%'} justifyContent={'center'}>
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={page => <IconButton variant={{ base: 'ghost', _selected: 'solid' }}>{page.value}</IconButton>}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}
