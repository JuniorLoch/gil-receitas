import { Box, Field, FileUpload, Icon } from '@chakra-ui/react'
import { useField } from 'formik'

import { LuUpload } from 'react-icons/lu'

interface FormImageUploadProps extends FileUpload.RootProps {
  label?: string
  required?: boolean
  name: string
  maxFiles?: number
}

export function FormImageUpload({ label, required, name, maxFiles = 1, ...props }: FormImageUploadProps) {
  const [field, meta] = useField(name)
  const isInvalid = !!meta.touched && !!meta.error

  return (
    <Field.Root required={!!required} invalid={isInvalid}>
      {!!label && <Field.Label color={'blue.500'}>{label}</Field.Label>}
      <FileUpload.Root
        alignItems='stretch'
        maxFiles={maxFiles}
        onFileAccept={e => {
          field.onChange({ target: { name: field.name, value: e.files } })
        }}
        name={field.name}
        onBlur={field.onBlur}
        {...props}
      >
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone>
          <Icon size='md' color='fg.muted'>
            <LuUpload />
          </Icon>
          <FileUpload.DropzoneContent>
            <Box>Drag and drop files here</Box>
            <Box color='fg.muted'>.png, .jpg up to 5MB</Box>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload.Root>
      {isInvalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
