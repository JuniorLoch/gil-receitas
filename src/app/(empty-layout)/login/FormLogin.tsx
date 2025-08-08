'use client'

import { Button, Center, GridItem, Image, Stack } from '@chakra-ui/react'
import { FormInput } from '@/app/(main-layout)/components/form/FormInput'
import { VGilGrid } from '@/app/(main-layout)/components/VGilGrid'
import { Form, Formik } from 'formik'
import NextImage from 'next/image'
import LogoLight from '@images/logo-light.png'
import LogoDark from '@images/logo-dark.png'

const loginFormInitialValues = {
  login: '',
  senha: '',
}

export function FormLogin() {
  return (
    <VGilGrid w={'100%'} h={'100%'} p={4}>
      <GridItem asChild rowSpan={5}>
        <Center>
          <Image asChild _light={{ display: 'none' }} boxSize={300}>
            <NextImage src={LogoDark} alt='Logotipo' />
          </Image>
          <Image asChild _dark={{ display: 'none' }} boxSize={300}>
            <NextImage src={LogoLight} alt='Logotipo' />
          </Image>
        </Center>
      </GridItem>
      <GridItem rowSpan={7}>
        <Formik
          initialValues={loginFormInitialValues}
          onSubmit={values => {
            console.log('Valores do login->', values)
          }}
        >
          <Stack asChild gap={8}>
            <Form>
              <FormInput name={'login'} label={'Login'} />
              <FormInput name={'senha'} type={'password'} label={'Senha'} />
              <Button w={'100%'} type={'submit'}>
                Enviar
              </Button>
            </Form>
          </Stack>
        </Formik>
      </GridItem>
    </VGilGrid>
  )
}
