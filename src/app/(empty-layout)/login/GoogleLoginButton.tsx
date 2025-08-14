'use client'

import { Button, HStack, Text } from '@chakra-ui/react'
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'

interface GoogleLoginButtonProps {
  onClick: () => void
}

export function GoogleLoginButton({ onClick }: GoogleLoginButtonProps) {
  return (
    <Button w='full' variant='outline' onClick={onClick} aria-label='Entrar com Google'>
      <HStack gap={2} align='center'>
        <FcGoogle />
        <Text>Login com Google</Text>
      </HStack>
    </Button>
  )
}
