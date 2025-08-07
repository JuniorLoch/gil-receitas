import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  onIdTokenChanged as _onIdTokenChanged,
} from 'firebase/auth'
import { firebaseAuth } from '.'

export function onAuthStateChanged(callback: () => void) {
  //PENDENTE - Mudar o nome das funções pra nao precisar disso
  return _onAuthStateChanged(firebaseAuth, callback)
}

export function onIdTokenChanged(callback: () => void) {
  return _onIdTokenChanged(firebaseAuth, callback)
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    await signInWithPopup(firebaseAuth, provider)
  } catch (error) {
    console.error('Error signing in with Google', error)
  }
}

export async function signOut() {
  try {
    return firebaseAuth.signOut()
  } catch (error) {
    console.error('Error signing out with Google', error)
  }
}
