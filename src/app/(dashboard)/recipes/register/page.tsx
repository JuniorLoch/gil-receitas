'use client'

import { Form, Formik } from 'formik'
import { GilGrid } from '../../components/GilGrid'
import { array, InferType, object, string } from 'yup'
import { FormInput } from '../../components/form/FormInput'
import { Button, Card, GridItem, Heading } from '@chakra-ui/react'
import { FormImageUpload } from '../../components/form/FormImageUpload'
import { FormTextArea } from '../../components/form/FormTextArea'

const recipeFormValidationSchema = object({
  nome: string().required('O nome é obrigatório').max(30),
  ingredientes: string().required('Os ingredientes são obrigatórios'),
  modoPreparo: string().required('O modo de preparo é obrigatório'),
  imagem: array().of(object({})).max(1, 'A receita não pode ter mais de uma imagem'),
  link: string().required(),
  categoria: string().required(),
})

export type recipeFormProps = InferType<typeof recipeFormValidationSchema>

const recipeFormInitialValues: recipeFormProps = {
  ingredientes: '',
  categoria: '',
  imagem: [''],
  link: '',
  modoPreparo: '',
  nome: '',
}

export default function RegisterRecipePage() {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size={'lg'}>Cadastro de receitas</Heading>
      </Card.Header>
      <Card.Body>
        <Formik
          validationSchema={recipeFormValidationSchema}
          initialValues={recipeFormInitialValues}
          onSubmit={values => {
            //PENDENTE - SUBMIT
            console.log('values: ', values)
          }}
        >
          <Form>
            <GilGrid>
              <GridItem colSpan={6}>
                <FormInput name='nome' label='Nome' />
              </GridItem>
              <GridItem colSpan={6}>
                <FormInput name='categoria' label='Categoria' />
              </GridItem>
              <GridItem colSpan={6}>
                <FormInput name='link' label='Link' />
              </GridItem>
              <GridItem colSpan={12}>
                <FormImageUpload name='imagem' />
              </GridItem>
              <GridItem colSpan={12}>
                <FormTextArea name='ingredientes' label='Ingredientes' />
              </GridItem>
              <GridItem colSpan={12}>
                <FormTextArea name='modoPreparo' label='Modo de Preparo' />
              </GridItem>
              <GridItem colSpan={12} display={'flex'} justifyContent={'end'}>
                <Button type='submit'>Cadastrar</Button>
              </GridItem>
            </GilGrid>
          </Form>
        </Formik>
      </Card.Body>
    </Card.Root>
  )
}
