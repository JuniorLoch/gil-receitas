import type { LoginMethods } from './types'

/** DOC
 * Centralized loading state presets keyed by LoginMethods.
 *
 * These constants provide readable defaults for:
 * - Initial hydration/loading across all methods
 * - Reset/loading-complete across all methods
 *
 * Extensibility:
 * - When adding a new LoginMethods member (e.g., 'Apple', 'Facebook'),
 *   update both maps to include the new key.
 *
 * Usage:
 * setLoading(loginLoadingTrue)
 * setLoading(loginLoadingFalse)
 */

//OBS - All methods are loading (e.g., during initial auth hydration or global transitions)
export const loginLoadingTrue: Record<LoginMethods, boolean> = {
  Credentials: true,
  Google: true,
}

//OBS - All methods are idle (no ongoing auth actions)
export const loginLoadingFalse: Record<LoginMethods, boolean> = {
  Credentials: false,
  Google: false,
}
