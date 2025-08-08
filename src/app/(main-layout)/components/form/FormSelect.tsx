import { Field, Spinner, InputGroup, NativeSelect } from '@chakra-ui/react'
import { useField } from 'formik'

interface FormSelectProps extends NativeSelect.RootProps {
  label?: string
  required?: boolean
  name: string
  loading?: boolean
  placeholder?: string
}

export function FormSelect({ label, required, name, loading, children, placeholder, ...props }: FormSelectProps) {
  const [field, meta] = useField(name)
  const invalid = !!meta.touched && !!meta.error

  return (
    <Field.Root required={!!required} invalid={invalid}>
      {label && <Field.Label color={'blue.500'}>{label}</Field.Label>}
      <InputGroup endElement={loading && <Spinner size='md' color='yellow.800' />}>
        <NativeSelect.Root {...props} disabled={loading} fontSize={['sm', 'sm', 'md', 'md']}>
          <NativeSelect.Field {...field} placeholder={placeholder || ''}>
            {children}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </InputGroup>

      {invalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
