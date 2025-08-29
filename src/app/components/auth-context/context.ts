'use client'

import { createContext, useContext } from 'react'
import type { AuthContextProps } from './types'
import { User } from 'firebase/auth'

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

/** DOC
Returns the authenticated Firebase User (non-null).

Assumptions:

  - Must be used within a protected subtree (e.g., (dashboard) layout)
  - that only renders after auth hydration and when the user is authenticated.
  
Behavior:

If called when no user is present (e.g., used outside protected routes),
it throws a descriptive error to fail fast during development.
*/
export function useDashboardUser(): User {
  const { userData } = useAuth()

  if (!userData) {
    throw new Error('useRequiredUser: no authenticated user available (use only under protected routes)')
  }

  return userData
}
