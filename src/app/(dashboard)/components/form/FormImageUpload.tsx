import { Box, Field, FileUpload, HStack, Icon, Stack } from '@chakra-ui/react'
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
  console.log('meta: ', meta)

  return (
    <Field.Root required={!!required} invalid={isInvalid}>
      {!!label && <Field.Label>{label}</Field.Label>}
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
        <FileUpload.Dropzone cursor={'pointer'} {...(isInvalid && { borderColor: 'red.500', bg: 'red.950' })}>
          <Icon size='md' color='fg.muted'>
            <LuUpload />
          </Icon>
          <FileUpload.DropzoneContent>
            <Box>Clique ou arraste uma imagem</Box>
            <Box color='fg.muted'>.png, .jpg up to 5MB</Box>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUpload.ItemGroup>
          <FileUpload.Context>
            {({ acceptedFiles }) =>
              acceptedFiles.map(file => (
                <FileUpload.Item key={file.name} file={file}>
                  <Stack>
                    <HStack justify={'space-between'}>
                      <Box>
                        <FileUpload.ItemName />
                        <FileUpload.ItemSizeText />
                      </Box>
                      <FileUpload.ItemDeleteTrigger />
                    </HStack>
                    <FileUpload.ItemPreviewImage />
                  </Stack>
                </FileUpload.Item>
              ))
            }
          </FileUpload.Context>
        </FileUpload.ItemGroup>
      </FileUpload.Root>
      {isInvalid && <Field.ErrorText color={'red.500'}>{meta.error}</Field.ErrorText>}
    </Field.Root>
  )
}
