'use client'

import { Button, Center, GridItem, Image, Link, Stack, Text } from '@chakra-ui/react'
import { FormInput } from '@/app/(dashboard)/components/form/FormInput'
import { VGilGrid } from '@/app/(dashboard)/components/VGilGrid'
import { Form, Formik } from 'formik'
import NextImage from 'next/image'
import LogoLight from '@images/logo-light.png'
import LogoDark from '@images/logo-dark.png'
import { boolean, InferType, object, ref, string } from 'yup'
import { useRouter } from 'next/navigation'
import { FormCheckbox } from '@/app/(dashboard)/components/form/FormCheckbox'
import { firebaseRegisterWithCredentials } from '@/services/firebase/auth'
import NextLink from 'next/link'
import { toast } from 'react-toastify'
import { GilCard } from '@/app/(dashboard)/components/gil-card'
import { useState } from 'react'

const registerFormValidationSchema = object({
  email: string().email('Email inválido').required('O email é obrigatório'),
  senha: string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('A senha é obrigatória'),
  confirmarSenha: string()
    .oneOf([ref('senha'), undefined], 'As senhas não coincidem')
    .required('Confirme a senha'),
  aceitarTermos: boolean().oneOf([true], 'Você precisa aceitar os termos'),
})

export type RegisterFormProps = InferType<typeof registerFormValidationSchema>

const registerFormInitialValues: RegisterFormProps = {
  email: '',
  senha: '',
  confirmarSenha: '',
  aceitarTermos: false,
}

export function FormCadastro() {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  return (
    <GilCard maxH={'calc(100vh - 64px)'} overflow={'hidden'}>
      <VGilGrid maxH={'calc(100vh - 64px)'} overflowY={'auto'}>
        <GridItem asChild rowSpan={4}>
          <Center>
            <Image asChild _light={{ display: 'none' }} alt='Logotipo' boxSize={'2xs'}>
              <NextImage src={LogoDark} alt='Logotipo' />
            </Image>
            <Image asChild _dark={{ display: 'none' }} alt='Logotipo' boxSize={'2xs'}>
              <NextImage src={LogoLight} alt='Logotipo' />
            </Image>
          </Center>
        </GridItem>
        <GridItem rowSpan={8}>
          <Formik
            initialValues={registerFormInitialValues}
            validationSchema={registerFormValidationSchema}
            onSubmit={async values => {
              setLoading(true)
              await firebaseRegisterWithCredentials(values.email, values.senha)
              toast.success('Conta criada com sucesso!')
              setLoading(false)
              router.replace('/login')
            }}
          >
            <Stack asChild gap={2}>
              <Form>
                <FormInput name={'email'} label={'Email'} />
                <FormInput name={'senha'} type={'password'} label={'Senha'} />
                <FormInput name={'confirmarSenha'} type={'password'} label={'Confirmar senha'} />
                <FormCheckbox name={'aceitarTermos'}>
                  Li e aceito os{' '}
                  <Link asChild fontWeight={'bold'}>
                    <NextLink href={'/termos'}>termos de uso</NextLink>
                  </Link>
                </FormCheckbox>
                <Button w={'100%'} type={'submit'} loading={loading}>
                  Cadastre-se
                </Button>
                <Center _dark={{ color: 'gray.400' }} _light={{ color: 'gray.800' }} fontSize={'sm'} gap={1}>
                  Já tem uma conta?
                  <Text asChild fontWeight={'bold'} cursor={'pointer'} _hover={{ textDecor: 'underline' }}>
                    <NextLink href={'/login'}>Entrar</NextLink>
                  </Text>
                </Center>
              </Form>
            </Stack>
          </Formik>
        </GridItem>
      </VGilGrid>
    </GilCard>
  )
}
