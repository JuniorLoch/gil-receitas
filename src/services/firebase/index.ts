'use client'

// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

function getFirebaseRequiredConfig(): FirebaseOptions {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
  const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET
  const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID
  const appId = process.env.NEXT_PUBLIC_APP_ID
  const databaseURL = process.env.NEXT_PUBLIC_DATABASE_URL

  const requiredOptions = [apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, databaseURL].filter(
    Boolean
  )

  console.log('requiredOptions: ', requiredOptions)

  console.log('requiredOptions.length === 7: ', requiredOptions.length === 7)

  //DOC - Jeito mais rápido que eu pensei de verificar se todas as variáveis realmente
  //existem sem ter que manualmente verificar todas
  if (!!requiredOptions.length && requiredOptions.length === 7) {
    return {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      databaseURL,
    }
  } else {
    throw new Error('Foi detectado algum erro na configuração das variáveis de ambiente')
  }
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  ...getFirebaseRequiredConfig(),
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
export const firebaseDatabase = getDatabase(firebaseApp)
