import { readDataOnce, writeDataOverwrite } from '@/services/firebase/database'
import slugify from 'slugify'

export const RECIPES_DB_PATH = '/recipes'

export interface SearchRecipeParams {
  page?: number
  limit?: number
  titulo?: string
  slug?: string
}

export interface RecipeRecord {
  id: string
  nome?: string
  titulo?: string
  descricao?: string
  ingredientes?: string
  modoPreparo?: string
  imagem?: any[]
  link?: string
  categoria?: string
  slug?: string
  createdAt?: number
}

export interface SearchRecipesResult {
  data: RecipeRecord[]
  total: number
  page: number
  limit: number
}

export async function searchRecipes(params: SearchRecipeParams = {}): Promise<SearchRecipesResult> {
  const page = params.page ?? 1
  const limit = params.limit ?? 10

  const snapshot = await readDataOnce(RECIPES_DB_PATH)

  const items: RecipeRecord[] = Array.isArray(snapshot)
    ? snapshot.map((rawRecipe, index) => ({ id: (rawRecipe && rawRecipe.id) || String(index), ...(rawRecipe || {}) }))
    : snapshot && typeof snapshot === 'object'
      ? Object.entries(snapshot).map(([key, value]) => ({ id: key, ...value }))
      : []

  const normalizedItems: RecipeRecord[] = items.map(recipe => {
    const tituloValue = recipe.titulo ?? recipe.nome ?? ''
    const slugValue = recipe.slug ?? slugify(tituloValue || '', { lower: true, strict: true })

    return { ...recipe, titulo: tituloValue, slug: slugValue }
  })

  const titleFiltered: RecipeRecord[] = params.titulo
    ? normalizedItems.filter(recipe => (recipe.titulo ?? '').toLowerCase().includes(params.titulo!.toLowerCase()))
    : normalizedItems

  const fullyFiltered: RecipeRecord[] = params.slug
    ? titleFiltered.filter(recipe => (recipe.slug ?? '') === params.slug)
    : titleFiltered

  const total = fullyFiltered.length
  const startIndex = (page - 1) * limit
  const data = fullyFiltered.slice(startIndex, startIndex + limit)

  return { data, total, page, limit }
}

export async function createRecipe(payload: Omit<RecipeRecord, 'id' | 'createdAt'>): Promise<RecipeRecord> {
  const id = `recipe_${Date.now()}`
  const record: RecipeRecord = { id, ...payload, createdAt: Date.now() }
  await writeDataOverwrite(`${RECIPES_DB_PATH}/${id}`, () => record)

  return record
}
