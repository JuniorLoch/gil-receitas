'use client'
import { Button, Center, GridItem, Image, Stack } from '@chakra-ui/react'
import { FormInput } from '@/app/(main-layout)/components/form/FormInput'
import { VGilGrid } from '@/app/(main-layout)/components/VGilGrid'
import { Form, Formik } from 'formik'
import NextImage from 'next/image'
import LogoLight from '@images/logo-light.png'
import LogoDark from '@images/logo-dark.png'
import { GoogleLoginButton } from './GoogleLoginButton'
import { InferType, object, string } from 'yup'

const loginFormValidationSchema = object({
  email: string().email('Email inválido').required('O email é obrigatório'),
  senha: string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('A senha é obrigatória'),
})

export type LoginFormProps = InferType<typeof loginFormValidationSchema>

const loginFormInitialValues: LoginFormProps = {
  email: '',
  senha: '',
}

export function FormLogin() {
  return (
    <VGilGrid w={'100%'} h={'100%'} p={4}>
      <GridItem asChild rowSpan={5}>
        <Center>
          <Image asChild _light={{ display: 'none' }} alt='Logotipo' boxSize={'xs'}>
            <NextImage src={LogoDark} alt='Logotipo' />
          </Image>
          <Image asChild _dark={{ display: 'none' }} alt='Logotipo' boxSize={'xs'}>
            <NextImage src={LogoLight} alt='Logotipo' />
          </Image>
        </Center>
      </GridItem>
      <GridItem rowSpan={7}>
        <Formik
          initialValues={loginFormInitialValues}
          validationSchema={loginFormValidationSchema}
          onSubmit={values => {
            console.log('Valores do login->', values)
          }}
        >
          <Stack asChild gap={8}>
            <Form>
              <FormInput name={'email'} label={'Email'} />
              <FormInput name={'senha'} type={'password'} label={'Senha'} />
              <Stack gap={2}>
                <Button w={'100%'} type={'submit'}>
                  Enviar
                </Button>
                <GoogleLoginButton
                  onClick={() => {
                    alert('CLICOIUIQWDJOIQWJDO')
                  }}
                />
              </Stack>
            </Form>
          </Stack>
        </Formik>
      </GridItem>
    </VGilGrid>
  )
}
