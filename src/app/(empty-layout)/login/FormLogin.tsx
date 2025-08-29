'use client'
import { Button, Center, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import { FormInput } from '@/app/(dashboard)/components/form/FormInput'
import { VGilGrid } from '@/app/(dashboard)/components/VGilGrid'
import { Form, Formik } from 'formik'
import LogoLight from '@images/logo-light.png'
import LogoDark from '@images/logo-dark.png'
import { GoogleLoginButton } from './GoogleLoginButton'
import { boolean, InferType, object, string } from 'yup'
import { FormCheckbox } from '@/app/(dashboard)/components/form/FormCheckbox'
import { useAuth } from '@/app/components/auth-context/context'
import Link from 'next/link'
import { GilImage } from '@/app/components/GilImage'

const loginFormValidationSchema = object({
  email: string().email('Email inválido').required('O email é obrigatório'),
  senha: string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('A senha é obrigatória'),
  lembrarLogin: boolean().default(false),
})

export type LoginFormProps = InferType<typeof loginFormValidationSchema>

const loginFormInitialValues: LoginFormProps = {
  email: '',
  senha: '',
  lembrarLogin: false,
}

export function FormLogin() {
  const { login, loading } = useAuth()

  return (
    <VGilGrid w={'100%'} h={'100%'} p={4}>
      <GridItem asChild rowSpan={5}>
        <Center>
          <Image asChild _light={{ display: 'none' }} alt='Logotipo' boxSize={'xs'}>
            <GilImage src={LogoDark} alt='Logotipo' />
          </Image>
          <Image asChild _dark={{ display: 'none' }} alt='Logotipo' boxSize={'xs'}>
            <GilImage src={LogoLight} alt='Logotipo' />
          </Image>
        </Center>
      </GridItem>
      <GridItem rowSpan={7}>
        <Formik
          initialValues={loginFormInitialValues}
          validationSchema={loginFormValidationSchema}
          onSubmit={values => {
            login('Credentials', values)
          }}
        >
          <Stack asChild gap={4}>
            <Form>
              <FormInput name={'email'} label={'Email'} />
              <FormInput name={'senha'} type={'password'} label={'Senha'} />
              <FormCheckbox name={'lembrarLogin'}>Lembrar de mim nesse computador</FormCheckbox>
              <Stack gap={2}>
                <Button w={'100%'} type={'submit'} loading={loading.Credentials}>
                  Enviar
                </Button>
                <GoogleLoginButton
                  loading={loading.Google}
                  onClick={() => {
                    login('Google')
                  }}
                />
                <Center _dark={{ color: 'gray.400' }} _light={{ color: 'gray.800' }} fontSize={'sm'} gap={1}>
                  Quer criar uma conta?
                  <Text asChild fontWeight={'bold'} cursor={'pointer'} _hover={{ textDecor: 'underline' }}>
                    <Link href={'/cadastro'}>Cadastre-se</Link>
                  </Text>
                </Center>
              </Stack>
            </Form>
          </Stack>
        </Formik>
      </GridItem>
    </VGilGrid>
  )
}
