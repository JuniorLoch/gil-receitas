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
} from 'firebase/auth'
import { firebaseAuth } from '.'
import { toast } from 'react-toastify'

export function onAppAuthStateChanged(callback: (user: User | null) => void) {
  return onAuthStateChanged(firebaseAuth, callback)
}

export function onAppIdTokenChanged(callback: (user: User | null) => void) {
  return onIdTokenChanged(firebaseAuth, callback)
}

export async function ensureLocalPersistence() {
  await setPersistence(firebaseAuth, browserLocalPersistence)
}

export async function firebaseLoginInWithGoogle(): Promise<User> {
  const provider = new GoogleAuthProvider()
  try {
    await ensureLocalPersistence()
    const authResponse = await signInWithPopup(firebaseAuth, provider)

    return authResponse.user
  } catch (error) {
    toast.error('Erro ao entrar com o Google')
    console.error('Error signing in with Google', error)

    throw error
  }
}

export async function firebaseLoginWithCredentials(credentials: { email: string; senha: string }): Promise<User> {
  try {
    await ensureLocalPersistence()
    const authResponse = await signInWithEmailAndPassword(firebaseAuth, credentials.email, credentials.senha)
    console.log('authResponse: ', authResponse)
    console.log('user response: ', authResponse.user)

    return authResponse.user
  } catch (error) {
    toast.error('Erro ao entrar com email/senha')
    console.error('Error signing in with Google', error)

    throw error
  }
}

export async function firebaseLogout() {
  try {
    await signOut(firebaseAuth)
  } catch (error) {
    toast.error('Erro ao sair')
    console.error('Error logout with Google', error)

    throw error
  }
}
