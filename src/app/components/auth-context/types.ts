// app/AuthContext/types.ts

import type { User } from 'firebase/auth'
import type { LoginFormProps } from '@/app/(empty-layout)/login/FormLogin'

export type LoginMethods = 'Credentials' | 'Google'

export type AuthContextProps = {
  userData: User | null
  loading: Record<LoginMethods, boolean>
  login: (method: LoginMethods, credentials?: LoginFormProps) => Promise<void>
  logout: () => Promise<void>
}
