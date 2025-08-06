// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeServerApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function getFirebaseConfig(): FirebaseOptions {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
  const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET
  const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID
  const appId = process.env.NEXT_PUBLIC_APP_ID

  const requiredOptions = [apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId].filter(Boolean)

  console.log('requiredOptions: ', requiredOptions)

  console.log('requiredOptions.length === 6: ', requiredOptions.length === 6)

  //DOC - Jeito mais rápido que eu pensei de verificar se todas as variáveis realmente
  //existem sem ter que manualmente verificar todas
  if (!!requiredOptions.length && requiredOptions.length === 6) {
    return {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
    }
  } else {
    throw new Error('Foi detectado algum erro na configuração das variáveis de ambiente')
  }
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  ...getFirebaseConfig(),
}

// Initialize Firebase
export const app = initializeServerApp(firebaseConfig)
