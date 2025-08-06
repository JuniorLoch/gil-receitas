import { Checkbox, Field, HStack, Icon } from '@chakra-ui/react'
import { useField } from 'formik'

interface FormCheckboxProps extends Checkbox.RootProps {
  required?: boolean
  name: string
}

export function FormCheckbox({ required, name, children, ...props }: FormCheckboxProps) {
  const [field, meta] = useField(name)
  const isInvalid = !!meta.touched && !!meta.error

  return (
    <Field.Root required={!!required} invalid={isInvalid}>
      <Checkbox.Root {...field} {...props} variant={'subtle'} fontSize={['sm', 'sm', 'md', 'md']}>
        <HStack>
          <Checkbox.HiddenInput />
          <Checkbox.Control p={3}>
            <Icon size={'xl'}>
              <Checkbox.Indicator />
            </Icon>
          </Checkbox.Control>
          <Checkbox.Label>{children}</Checkbox.Label>
        </HStack>
      </Checkbox.Root>
      {isInvalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
