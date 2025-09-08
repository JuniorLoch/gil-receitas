'use client'

import { Form, Formik } from 'formik'
import { GilGrid } from '../../components/GilGrid'
import { array, InferType, mixed, object, string } from 'yup'
import { FormInput } from '../../components/form/FormInput'
import { Button, Card, GridItem, Heading } from '@chakra-ui/react'
import { FormImageUpload } from '../../components/form/FormImageUpload'
import { FormTextArea } from '../../components/form/FormTextArea'
import { FormSelect } from '../../components/form/FormSelect'

const recipeFormValidationSchema = object({
  nome: string().required('O nome é obrigatório').max(30, 'O nome é muito grande!'),
  descricao: string().max(30),
  ingredientes: string().required('Os ingredientes são obrigatórios'),
  modoPreparo: string().required('O modo de preparo é obrigatório'),
  imagem: array().of(mixed()).min(1, 'A imagem é obrigatória'),
  link: string(),
  categoria: string().oneOf(['doce', 'salgado', '']),
})

export type recipeFormProps = InferType<typeof recipeFormValidationSchema>

const recipeFormInitialValues: recipeFormProps = {
  ingredientes: '',
  categoria: '',
  imagem: [],
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
                {/* <FormInput name='categoria' label='Categoria' /> */}
                <FormSelect name='categoria' label='Categoria'>
                  <option value=''>Selecione uma categoria</option>
                  <option value={'doce'}>Doce</option>
                  <option value={'salgado'}>Salgado</option>
                </FormSelect>
              </GridItem>
              <GridItem colSpan={6}>
                <FormInput name='link' label='Link' />
              </GridItem>
              <GridItem colSpan={12}>
                <FormImageUpload name='imagem' label='Imagem' />
              </GridItem>
              <GridItem colSpan={12}>
                <FormTextArea name='ingredientes' label='Ingredientes' autoresize maxHeight={'15lh'} />
              </GridItem>
              <GridItem colSpan={12}>
                <FormTextArea name='modoPreparo' label='Modo de Preparo' autoresize maxHeight={'15lh'} />
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
