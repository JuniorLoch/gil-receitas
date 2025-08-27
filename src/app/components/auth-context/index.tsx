'use client'

import { useEffect, useMemo, useState } from 'react'
import type { User } from 'firebase/auth'
import { firebaseLogout, onAppAuthStateChanged } from '@/services/firebase/auth'
import type { GenericComponent } from '@/interfaces/generic-component'
import type { LoginFormProps } from '../../(empty-layout)/login/FormLogin'
import { createLoginMethods } from './login-methods'
import { AuthContext } from './context'
import { LoginMethods } from './types'
import { loginLoadingFalse, loginLoadingTrue } from './loading.const'

export function AuthProvider({ children }: GenericComponent) {
  const [userData, setUserData] = useState<User | null>(null)
  const [loading, setLoading] = useState<Record<LoginMethods, boolean>>(loginLoadingFalse)

  /** DOC
   * Hydration flow: initialize and synchronize auth state on mount, firebase
   * automatically handles any change to the auth state
   *
   * Steps:
   * 1) Set all methods to loading to indicate initial auth hydration.
   * 2) Subscribe to Firebase auth state changes (onAppAuthStateChanged).
   * 3) When Firebase resolves, update userData and mark all methods idle.
   * 4) Cleanup the subscription on unmount.
   */
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

  const loginMethodsFunctions = useMemo(() => createLoginMethods(), [])

  async function login(method: LoginMethods, credentials?: LoginFormProps) {
    setLoading(prev => ({ ...prev, [method]: true }))

    const user = await loginMethodsFunctions[method](credentials)

    if (user) {
      setUserData(user)
    }

    setLoading(prev => ({ ...prev, [method]: false }))
  }

  async function logout() {
    setLoading(loginLoadingTrue)

    await firebaseLogout()
    setUserData(null)

    setLoading(loginLoadingFalse)
  }

  // const value = useMemo(() => (), [userData, loading])

  return <AuthContext.Provider value={{ userData, loading, login, logout }}>{children}</AuthContext.Provider>
}
