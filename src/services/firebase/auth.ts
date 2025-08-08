import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'
import { firebaseAuth } from '.'
import { toast } from 'react-toastify'

export function onAppAuthStateChanged(callback: () => void) {
  return onAuthStateChanged(firebaseAuth, callback)
}

export function onAppIdTokenChanged(callback: () => void) {
  return onIdTokenChanged(firebaseAuth, callback)
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    await signInWithPopup(firebaseAuth, provider)
  } catch (error) {
    toast.error('Erro ao logar com o google')
    console.error('Error signing in with Google', error)
  }
}

export async function signOut() {
  try {
    return firebaseAuth.signOut()
  } catch (error) {
    toast.error('Erro ao deslogar com o google')
    console.error('Error signing out with Google', error)
  }
}
