import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  signOut,
  User,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { firebaseAuth } from '.'
import { toast } from 'react-toastify'
import { LoginFormProps } from '@/app/(empty-layout)/login/FormLogin'

export function onAppAuthStateChanged(callback: (user: User | null) => void) {
  return onAuthStateChanged(firebaseAuth, callback)
}

export function onAppIdTokenChanged(callback: (user: User | null) => void) {
  return onIdTokenChanged(firebaseAuth, callback)
}

/** DOC
 * Ensures Firebase Auth uses local (persistent across restarts) storage for sessions.
 *
 * Behavior:
 * - Stores the authenticated session in localStorage.
 * - Session survives page reloads and full browser restarts until the user signs out.
 * - Applies to the provided Auth instance for current and subsequent sign-ins.
 */
export async function ensureLocalPersistence() {
  await setPersistence(firebaseAuth, browserLocalPersistence)
}

/** DOC
 * Ensures Firebase Auth uses session (tab/window-scoped) storage for sessions.
 *
 * Behavior:
 * - Stores the authenticated session in sessionStorage.
 * - Session persists across page reloads in the same tab, but ends when the tab/window closes.
 * - Applies to the provided Auth instance for current and subsequent sign-ins.
 */
export async function ensureSessionPersistence() {
  await setPersistence(firebaseAuth, browserSessionPersistence)
}

/** DOC
 * Registers a new user using Firebase email/password
 * @returns user object on success
 * @throws error if registration fails
 */
export async function firebaseRegisterWithCredentials(email: string, password: string) {
  const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password)

  return user
}

export async function firebaseLoginInWithGoogle(): Promise<User | undefined> {
  const provider = new GoogleAuthProvider()
  try {
    await ensureLocalPersistence()
    const authResponse = await signInWithPopup(firebaseAuth, provider)

    return authResponse.user
  } catch (error) {
    toast.error('Erro ao entrar com o Google')
    console.error('Error signing in with Google', error)
  }
}

export async function firebaseLoginWithCredentials(credentials: LoginFormProps): Promise<User | undefined> {
  try {
    if (credentials.lembrarLogin) {
      await ensureLocalPersistence()
    } else {
      await ensureSessionPersistence()
    }
    const authResponse = await signInWithEmailAndPassword(firebaseAuth, credentials.email, credentials.senha)

    return authResponse.user
  } catch (error) {
    toast.error('Erro ao entrar com email/senha')
    console.error('Error signing in with Google', error)
  }
}

export async function firebaseLogout() {
  try {
    await signOut(firebaseAuth)
  } catch (error) {
    toast.error('Erro ao sair')
    console.error('Error logout with Google', error)
  }
}
