import { Field, Input, InputGroup, InputProps, Spinner } from '@chakra-ui/react'
import { useField } from 'formik'

interface FormInputProps extends InputProps {
  label?: string
  required?: boolean
  name: string
  loading?: boolean
}

export function FormInput({ label, required, name, loading, ...props }: FormInputProps) {
  const [field, meta] = useField(name)
  const invalid = !!meta.touched && !!meta.error

  return (
    <Field.Root required={!!required} invalid={invalid}>
      {!!label && <Field.Label color={'blue.500'}>{label}</Field.Label>}
      <InputGroup endElement={loading && <Spinner size='md' color='yellow.800' />}>
        <Input {...field} {...props} variant={'flushed'} fontSize={['sm', 'sm', 'md', 'md']} />
      </InputGroup>
      {invalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
