'use client'

import { useRef } from 'react'
import { useField } from 'formik'
import { Field } from '@chakra-ui/react'
import { type MDXEditorMethods, type MDXEditorProps } from '@mdxeditor/editor'

// OBS - This is the only place InitializedMDXEditor is imported directly.
import { InitializedMDXEditor } from './InitializedTextEditor'

interface FormTextEditorProps extends MDXEditorProps {
  name: string
  label: string
  required?: boolean
  // initialValue: string
}

// DOC - This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export function FormTextEditor({ name, label, required, ...props }: FormTextEditorProps) {
  const [field, meta] = useField(name)
  const editorRef = useRef<MDXEditorMethods>(null)
  const invalid = !!meta.touched && !!meta.error

  return (
    <Field.Root required={!!required} invalid={invalid} width={'100%'}>
      <Field.Label fontSize={['sm', 'sm', 'md', 'md']}>{label}</Field.Label>
      <InitializedMDXEditor
        {...props}
        editorRef={editorRef}
        onChange={markdown => field.onChange({ target: { name, value: markdown } })}
        onBlur={() => field.onBlur({ target: { name } })}
      />
      {invalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}

// OBS - TS complains without the following line
FormTextEditor.displayName = 'FormTextEditor'
