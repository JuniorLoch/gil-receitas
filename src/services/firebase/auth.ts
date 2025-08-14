import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { firebaseAuth } from '.'
import { toast } from 'react-toastify'
import { LoginFormProps } from '@/app/(empty-layout)/login/FormLogin'

export function onAppAuthStateChanged(callback: () => void) {
  return onAuthStateChanged(firebaseAuth, callback)
}

export function onAppIdTokenChanged(callback: () => void) {
  return onIdTokenChanged(firebaseAuth, callback)
}

export async function firebaseLoginInWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    const authResponse = await signInWithPopup(firebaseAuth, provider)
    console.log('authResponse: ', authResponse)
    console.log('user response: ', authResponse.user)

    return authResponse.user
  } catch (error) {
    toast.error('Erro ao logar com o google')
    console.error('Error signing in with Google', error)
  }
}

export async function firebaseLoginWithCredentials(credentials: LoginFormProps) {
  try {
    const authResponse = await signInWithEmailAndPassword(firebaseAuth, credentials.email, credentials.senha)
    console.log('authResponse: ', authResponse)
    console.log('user response: ', authResponse.user)

    return authResponse.user
  } catch (error) {
    toast.error('Erro ao logar com o google')
    console.error('Error signing in with Google', error)
  }
}

export async function firebaseLogout() {
  try {
    return firebaseAuth.signOut()
  } catch (error) {
    toast.error('Erro ao deslogar com o google')
    console.error('Error signing out with Google', error)
  }
}
