import { Alert } from '@chakra-ui/react'

export default function RecipesPage() {
  return (
    <Alert.Root status='success'>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Página de receitas</Alert.Title>
        <Alert.Description>Nessa pagina vai ser listado as receitas</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
