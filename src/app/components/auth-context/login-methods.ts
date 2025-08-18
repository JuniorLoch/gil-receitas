import type { User } from 'firebase/auth'
import type { LoginFormProps } from '@/app/(empty-layout)/login/FormLogin'
import type { LoginMethods } from './types'
import { firebaseLoginWithCredentials, firebaseLoginInWithGoogle } from '@/services/firebase/auth'

/** DOC
 * Creates a map of login methods to their corresponding handlers.
 *
 * This function centralizes the authentication entry points for the app.
 * Each key corresponds to a supported login method, and its value is an async
 * function that performs the sign-in flow and resolves with the authenticated User.
 *
 * Important:
 * - For methods that require credentials (e.g., "Credentials"), the caller must
 *   provide a LoginFormProps object. This function does not validate presence of
 *   credentials and will forward them directly to the underlying auth helper.
 * - For methods that do not require credentials (e.g., "Google"), the parameter
 *   should be omitted.
 *
 * Extensibility:
 * - To add new providers (e.g., "Apple", "Facebook"), extend the LoginMethods type,
 *   update any loading state constants keyed by LoginMethods, and add a new entry
 *   in the returned object that calls the corresponding Firebase auth helper.
 *
 * Usage:
 * const loginMethods = createLoginMethods();
 * const user = await loginMethods.Credentials({ email, senha, lembrarLogin });
 * // or
 * const user = await loginMethods.Google();
 *
 * @returns A record mapping each LoginMethods key to an async handler that returns a Firebase User.
 */
export function createLoginMethods(): Record<
  LoginMethods,
  (credentials?: LoginFormProps) => Promise<User | undefined>
> {
  return {
    Credentials: async (credentials?: LoginFormProps) => {
      return firebaseLoginWithCredentials(credentials!)
    },
    Google: async () => {
      return firebaseLoginInWithGoogle()
    },
  }
}
