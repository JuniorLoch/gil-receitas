import { FormInput } from '@/app/(dashboard)/components/form/FormInput'
import { GilGrid } from '@/app/(dashboard)/components/GilGrid'
import { RecipePagination } from '@/app/(dashboard)/recipes/components/RecipesPagination'
import { RecipeSearchFilters } from '@/app/(dashboard)/recipes/components/RecipesSearchFilters'
import { useRecipesContext, defaultRecipePagination } from '@/app/(dashboard)/recipes/RecipesCadastroContext'
import { Badge, Box, Center, GridItem, HStack, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { FormikHelpers, Formik, Form } from 'formik'
import { useEffect } from 'react'
import { InferType, object, string } from 'yup'

const recipeSearchSchema = object().shape({
  titulo: string().optional(),
  slug: string().optional(),
})

type RecipeSearchObjectProps = InferType<typeof recipeSearchSchema>

const recipeSearchInitialValues: RecipeSearchObjectProps = {
  titulo: '',
  slug: '',
}

export default function RecipesPage() {
  const { recipeList, handleSearchRecipeVirtual } = useRecipesContext()

  async function handleSearchSubmit(
    values: RecipeSearchObjectProps,
    { setSubmitting }: FormikHelpers<RecipeSearchObjectProps>
  ) {
    handleSearchRecipeVirtual({
      ...defaultRecipePagination,
      titulo: values.titulo,
      slug: values.slug,
    })

    setSubmitting(false)
  }

  useEffect(() => {
    handleSearchRecipeVirtual()
  }, [])

  return (
    <Box>
      <Formik
        initialValues={recipeSearchInitialValues}
        validationSchema={recipeSearchSchema}
        onSubmit={handleSearchSubmit}
      >
        <Form>
          <RecipeSearchFilters>
            <GilGrid>
              <GridItem colSpan={6}>
                <FormInput name='titulo' label='Titulo:' />
              </GridItem>
              <GridItem colSpan={6}>
                <FormInput name='slug' label='Slug:' />
              </GridItem>
            </GilGrid>
          </RecipeSearchFilters>
        </Form>
      </Formik>
      <VStack borderWidth={1} borderRadius={'l2'} gap={2} p={1} mt={4} alignItems='stretch'>
        {!!recipeList?.length ? (
          recipeList.map(recipe => (
            <Link key={recipe.id} href={`/recipe-virtual/cadastro/${recipe.id}/dados`}>
              <Stack
                bgColor={'bg.muted'}
                w={'100%'}
                p={2}
                borderRadius={'l2'}
                _hover={{ bgColor: 'bg.emphasized', cursor: 'pointer' }}
              >
                <HStack>
                  <Badge colorPalette={'pink'}>{recipe.slug}</Badge>
                </HStack>

                <Text>
                  {recipe.id} - {recipe.titulo}
                </Text>
              </Stack>
            </Link>
          ))
        ) : (
          <Center p={4}>Nenhum recipe virtual encontrado com esses filtros</Center>
        )}
      </VStack>
      <RecipePagination />
    </Box>
  )
}
