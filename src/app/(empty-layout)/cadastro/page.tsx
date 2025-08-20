import { Container } from '@chakra-ui/react'
import { FormCadastro } from './components/FormCadastro'
import { ColorModeButton } from '@/app/components/color-mode'

export default function CadastroPage() {
  return (
    <>
      <ColorModeButton position={'absolute'} zIndex={1} right={8} top={8} />
      <Container py={8}>
        <FormCadastro />
      </Container>
    </>
  )
}
