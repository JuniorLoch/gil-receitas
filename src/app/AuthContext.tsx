'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { User } from 'firebase/auth'
import {
  firebaseLoginInWithGoogle,
  firebaseLoginWithCredentials,
  firebaseLogout,
  onAppAuthStateChanged,
} from '@/services/firebase/auth'
import type { GenericComponent } from '@/interfaces/generic-component'
import type { LoginFormProps } from './(empty-layout)/login/FormLogin'
import { clearRememberFlag, setRememberFlag } from '@/services/local-storage/remember-me'

export type LoginMethods = 'Credentials' | 'Google'

type AuthContextProps = {
  userData: User | null
  loading: Record<LoginMethods, boolean>
  login: (method: LoginMethods, credentials?: LoginFormProps, options?: { remember: boolean }) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
  userData: null,
  loading: { Credentials: false, Google: false },
  login: async () => {},
  logout: async () => {},
})

const loginLoadingTrue = { Credentials: true, Google: true }
const loginLoadingFalse = { Credentials: true, Google: true }

export function AuthProvider({ children }: GenericComponent) {
  const [userData, setUserData] = useState<User | null>(null)
  const [loading, setLoading] = useState<Record<LoginMethods, boolean>>({ Credentials: false, Google: false })

  useEffect(() => {
    setLoading(loginLoadingTrue)
    const unsubscribe = onAppAuthStateChanged(user => {
      setUserData(user)
      setLoading(loginLoadingFalse)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const loginMethodsFunctions: Record<LoginMethods, (credentials?: LoginFormProps) => Promise<User>> = {
    Credentials: async credentials => {
      return firebaseLoginWithCredentials(credentials!)
    },
    Google: async () => {
      return firebaseLoginInWithGoogle()
    },
  }

  async function login(method: LoginMethods, credentials?: LoginFormProps) {
    setLoading(prev => ({ ...prev, [method]: true }))

    const user = await loginMethodsFunctions[method](credentials)
    setUserData(user)

    if (credentials?.lembrarLogin) {
      setRememberFlag(true)
    }

    setLoading(prev => ({ ...prev, [method]: false }))
  }

  async function logout() {
    setLoading(loginLoadingTrue)

    await firebaseLogout()
    setUserData(null)
    clearRememberFlag()

    setLoading(loginLoadingFalse)
  }

  const value = useMemo(() => ({ userData, loading, login, logout }), [userData, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
