'use client'

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

  const requiredAttributes = [apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, databaseURL]

  if (requiredAttributes.some(v => !v)) {
    throw new Error('Erro nas variáveis de ambiente do Firebase')
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    databaseURL,
  }
}

const firebaseConfig: FirebaseOptions = getFirebaseRequiredConfig()

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
export const firebaseDatabase = getDatabase(firebaseApp)
