import { Field, Input, InputGroup, InputProps, Spinner } from '@chakra-ui/react'
import { useField } from 'formik'
import { ChangeEvent, useMemo } from 'react'
import { withMask } from 'use-mask-input'

interface FormInputMaskProps extends InputProps {
  label?: string
  required?: boolean
  name: string
  loading?: boolean
  mask: string
  unmask: boolean
}

export function FormInputMask({ label, required, name, loading, mask, unmask, ...props }: FormInputMaskProps) {
  const [field, meta] = useField(name)
  const isInvalid = !!meta.touched && !!meta.error

  //DOC - Implementando manualmente a funcionalidade do UNMASK que tinha antes, no momento
  //só funciona com DIGITOS, se tentar usar com LETRAS ou SÍMBOLOS que deveriam aparecer
  //com unmask=true, não vai funcionar
  const onChangeHandler = useMemo(() => {
    if (unmask) {
      return (e: ChangeEvent<HTMLInputElement>) => {
        field.onChange({ target: { name, value: e.target.value.replace(/\D/g, '') } })
      }
    } else {
      return field.onChange
    }
  }, [unmask])

  return (
    <Field.Root required={!!required} invalid={isInvalid}>
      {!!label && <Field.Label color={'blue.500'}>{label}</Field.Label>}
      <InputGroup endElement={loading && <Spinner size='md' color='yellow.800' />}>
        <Input
          name={field.name}
          variant={'flushed'}
          onBlur={field.onBlur}
          value={field.value}
          onChange={onChangeHandler}
          ref={withMask(mask)}
          {...props}
        />
      </InputGroup>
      {isInvalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
