'use client'

import { SearchRecipeVirtualParams, searchRecipes, RecipeVirtualData } from '@/actions/client/recipes'
import { GenericContext } from '@/interfaces/generic-context'
import { createContext, use, useCallback, useEffect, useState } from 'react'

export interface RecipeSearchFilters {
  total?: number
  page: number
  limit: number
  titulo?: string
  slug?: string
}

export const defaultRecipePagination = {
  limit: 10,
  page: 1,
}

type CreateRecipesContextProps = {
  recipeList: Array<RecipeVirtualData>
  searchFilters: RecipeSearchFilters
  handleSearchRecipeVirtual: (searchFilters?: SearchRecipeVirtualParams) => Promise<void>
}

const CreateRecipesContext = createContext<CreateRecipesContextProps>({
  recipeList: [],
  searchFilters: defaultRecipePagination,
  handleSearchRecipeVirtual: async () => {},
})

export const useRecipesContext = () => use(CreateRecipesContext)

export default function RecipesContext({ children }: GenericContext) {
  const [recipeList, setRecipeList] = useState<Array<RecipeVirtualData>>([])
  const [searchFilters, setSearchFilters] = useState<RecipeSearchFilters>(defaultRecipePagination)

  const handleSearchRecipeVirtual = useCallback(
    async (newSearchFilters?: SearchRecipeVirtualParams) => {
      const response = await searchRecipes({
        ...(!!newSearchFilters ? newSearchFilters : searchFilters),
      })

      if (response) {
        setRecipeList(response.data)
        setSearchFilters({
          ...newSearchFilters,
          total: response.total,
          page: response.page,
          limit: response.limit,
        })
      }
    },
    [searchFilters]
  )

  useEffect(() => {
    async function handleFirstRender() {}
    handleFirstRender()
  }, [])

  return (
    <CreateRecipesContext.Provider value={{ recipeList, searchFilters, handleSearchRecipeVirtual }}>
      {children}
    </CreateRecipesContext.Provider>
  )
}
