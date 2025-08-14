'use client'

import { GenericComponent } from '@/interfaces/generic-component'
import { firebaseLoginInWithGoogle, firebaseLoginWithCredentials, firebaseLogout } from '@/services/firebase/auth'
import { createContext, useContext, useState } from 'react'
import { User } from 'firebase/auth'
import { LoginFormProps } from './(empty-layout)/login/FormLogin'

export type LoginMethods = 'Credentials' | 'Google'

const loginMethodsFunctions: Record<LoginMethods, (credentials?: LoginFormProps) => Promise<User | undefined>> = {
  Credentials: credentials => firebaseLoginWithCredentials(credentials as LoginFormProps),
  Google: () => firebaseLoginInWithGoogle(),
}

interface AuthContextProps {
  userData?: User
  login: (method: LoginMethods, credentials?: LoginFormProps) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
  login: () => {},
  logout: () => {},
  //@ts-expect-error ✅ Valor inicial nunca utilizado
  userData: {},
})

interface AuthProviderProps extends GenericComponent {
  bomdia: any
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<User>()

  async function login(method: LoginMethods, credentials?: LoginFormProps) {
    const firebaseUser = await loginMethodsFunctions[method](credentials)

    setUserData(firebaseUser)
  }

  function logout() {
    return firebaseLogout()
  }

  return <AuthContext.Provider value={{ userData, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
