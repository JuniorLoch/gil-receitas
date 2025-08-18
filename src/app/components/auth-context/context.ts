'use client'

import { createContext, useContext } from 'react'
import type { AuthContextProps } from './types'

/** DOC
 * Central context object for authentication state and actions.
 *
 * This file defines and exports:
 * - AuthContext: the React context carrying auth state and actions.
 * - useAuth: a typed hook to consume the context safely.
 *
 * Notes:
 * - The default value matches the AuthContextProps shape but provides
 *   no-op async functions to avoid undefined checks in consumers.
 * - The real values are provided by AuthProvider at runtime.
 *
 * Usage:
 * import { useAuth } from '@/app/AuthContext/context'
 * const { userData, loading, login, logout } = useAuth()
 */
export const AuthContext = createContext<AuthContextProps>({
  userData: null,
  loading: { Credentials: false, Google: false },
  //OBS - No-op placeholders; AuthProvider supplies real implementations
  login: async () => {},
  logout: async () => {},
})

/** DOC
 * Typed convenience hook to consume the AuthContext.
 *
 * Usage:
 * const { userData, loading, login, logout } = useAuth()
 */
export function useAuth(): AuthContextProps {
  return useContext(AuthContext)
}
