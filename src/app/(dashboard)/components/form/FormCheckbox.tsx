import { Checkbox, Field, HStack, Separator, Stack } from '@chakra-ui/react'
import { useField } from 'formik'

interface FormCheckboxProps extends Checkbox.RootProps {
  required?: boolean
  name: string
}

export function FormCheckbox({ required, name, children, ...props }: FormCheckboxProps) {
  const [field, meta] = useField(name)
  const isInvalid = !!meta.touched && !!meta.error

  return (
    <Field.Root required={!!required} invalid={isInvalid} className={'group'}>
      <Checkbox.Root {...field} {...props} variant={'outline'} fontSize={['sm', 'sm', 'md', 'md']} w='100%'>
        <Stack w='100%'>
          <HStack>
            <Checkbox.HiddenInput />
            <Checkbox.Control transition={'border 100ms'} _groupHover={{ borderColor: 'white' }} />
            <Checkbox.Label>{children}</Checkbox.Label>
          </HStack>
          <Separator transition={'width 250ms'} w={'0%'} _groupHover={{ w: '100%' }} />
        </Stack>
      </Checkbox.Root>
      {isInvalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
