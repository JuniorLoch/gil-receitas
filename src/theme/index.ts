import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

//DOC - Não é possível alterar o nome dessas constantes, o typegen do chakra espera
//explicitamente por essas constantes com esses nomes dentro do arquivo
const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

export const system = createSystem(defaultConfig, config)
