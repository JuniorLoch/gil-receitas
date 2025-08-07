import { ref, set, get, child, onValue, DataSnapshot, Unsubscribe } from 'firebase/database'
import { firebaseDatabase } from '.'

export function writeDataOvewrite(location: string, data: () => unknown): Promise<void> {
  return set(ref(firebaseDatabase, location), data())
}

export async function readDataOnce(location: string): Promise<DataSnapshot | undefined> {
  return get(child(ref(firebaseDatabase), location))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val())

        return snapshot.val()
      } else {
        console.log('No data available')
      }
    })
    .catch(error => {
      console.error(error)
    })
}

export function readDataListener(location: string, callback: (value: any) => void): Unsubscribe {
  return onValue(ref(firebaseDatabase, location), snapshot => {
    const value = snapshot.val()

    console.log('value ->', value)

    callback(value)
  })
}
