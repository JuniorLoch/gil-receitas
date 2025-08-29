import { LoginMethods } from './types'

export function isAuthHydrating(loading: Record<LoginMethods, boolean>): boolean {
  // When you start the app, you set all methods to true, then set all to false once hydrated.
  // If any method is true, consider hydration or an auth action in progress.
  return Object.values(loading).some(Boolean)
}
