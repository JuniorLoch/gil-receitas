import { Alert } from '@chakra-ui/react'

export default function RegisterRecipePage() {
  return (
    <Alert.Root status='success'>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Página de cadastrar receitas</Alert.Title>
        <Alert.Description>Essa pagina vai ter o cadastro de receitas</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
