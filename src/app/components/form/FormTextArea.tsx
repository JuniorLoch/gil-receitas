import { Field, Textarea, TextareaProps } from '@chakra-ui/react'
import { useField } from 'formik'

interface FormTextAreaProps extends TextareaProps {
  name: string
  label: string
  required?: boolean
}

export function FormTextArea({ name, label, required, ...props }: FormTextAreaProps) {
  const [field, meta] = useField(name)
  const invalid = !!meta.touched && !!meta.error

  return (
    <Field.Root required={!!required} invalid={invalid}>
      <Field.Label fontSize={['sm', 'sm', 'md', 'md']} color='blue.500'>
        {label}
      </Field.Label>
      <Textarea {...field} {...props} />
      {invalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
