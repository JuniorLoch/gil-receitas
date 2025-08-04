import { Alert } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Alert.Root status='success'>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Página de inicial</Alert.Title>
        <Alert.Description>Essa é a pagina inicial</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
