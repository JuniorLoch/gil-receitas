'use client'

import { Button, ButtonProps, HStack, Text } from '@chakra-ui/react'
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'

interface GoogleLoginButtonProps extends ButtonProps {
  onClick: () => void
}

export function GoogleLoginButton({ onClick, ...rest }: GoogleLoginButtonProps) {
  return (
    <Button w='full' variant='outline' onClick={onClick} aria-label='Entrar com Google' {...rest}>
      <HStack gap={2} align='center'>
        <FcGoogle />
        <Text>Login com Google</Text>
      </HStack>
    </Button>
  )
}
