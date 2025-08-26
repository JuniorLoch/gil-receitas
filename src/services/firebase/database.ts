import { ref, set, get, child, onValue, Unsubscribe } from 'firebase/database'
import { firebaseDatabase } from '.'
import { toast } from 'react-toastify'

export function writeDataOverwrite<T>(location: string, data: () => T): Promise<void> {
  return set(ref(firebaseDatabase, location), data())
}

export async function readDataOnce<T = unknown>(location: string): Promise<T | undefined> {
  try {
    const snapshot = await get(child(ref(firebaseDatabase), location))

    if (snapshot.exists()) {
      return snapshot.val()
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export function readDataListener<T = unknown>(location: string, callback: (value: T | null) => void): Unsubscribe {
  return onValue(
    ref(firebaseDatabase, location),
    snapshot => {
      const value = snapshot.exists() ? (snapshot.val() as T) : null
      callback(value)
    },
    error => {
      console.error(`Firebase listener error at '${location}':`, error)
      toast.error(`Erro ao ler dados de ${location}`)
    }
  )
}
