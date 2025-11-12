'use client'

import { useRef } from 'react'
import { useField } from 'formik'
import { Field } from '@chakra-ui/react'
import { type MDXEditorMethods, type MDXEditorProps } from '@mdxeditor/editor'
import { FormTextEditor } from '@/app/(dashboard)/components/form/form-text-editor'

interface FormTextEditorFieldProps extends Omit<MDXEditorProps, 'markdown'> {
  name: string
  label: string
  required?: boolean
}

export function FormTextEditorField({ name, label, required, ...props }: FormTextEditorFieldProps) {
  const [field, meta] = useField(name)
  const editorRef = useRef<MDXEditorMethods>(null)
  const invalid = !!meta.touched && !!meta.error

  // const handleBlur = () => {
  //   if (editorRef.current) {
  //     const content = editorRef.current.getMarkdown()
  //     field.onChange({ target: { name: field.name, value: content } })
  //   }
  //   field.onBlur({ target: { name: field.name } })
  // }

  return (
    <Field.Root required={!!required} invalid={invalid}>
      <Field.Label fontSize={['sm', 'sm', 'md', 'md']}>{label}</Field.Label>
      <FormTextEditor ref={editorRef} markdown={field.value} {...field} {...props} />
      {invalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
