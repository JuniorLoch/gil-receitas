'use client'

import { readDataListener, writeDataOverwrite } from '@/services/firebase/database'
import { Button, Heading, List, Stack } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type bomdia = Record<string, { bomdia: string }>

export function TesteDatabase() {
  const [values, setValues] = useState<bomdia>()

  useEffect(() => {
    return readDataListener<bomdia>('bomdia', data => {
      if (!!data) {
        setValues(data)
      }
    })
  }, [])

  return (
    <>
      <Stack gap={3}>
        <Button
          onClick={async () => {
            const randomN = nanoid(5)

            const writeDataPromise = writeDataOverwrite(`bomdia/${randomN}`, () => ({ bomdia: `bomdia-${randomN}` }))

            toast.promise(writeDataPromise, {
              error: 'Ocorreu um erro ao cadastrar bomdia',
              pending: 'Bomdia está sendo cadastrado',
              success: 'Bomdia cadastrado com sucesso!',
            })
          }}
        >
          Salvar 'bomdia' no firebase
        </Button>

        <Heading size={'md'}>Todos os 'Bomdia's no database</Heading>
        <List.Root>
          {!!values &&
            !!Object.keys(values) &&
            Object.keys(values).map(valueKey => (
              <List.Item key={nanoid(5)}>
                <b>{valueKey}</b>: {values[valueKey]?.bomdia}
              </List.Item>
            ))}
        </List.Root>
      </Stack>
    </>
  )
}
