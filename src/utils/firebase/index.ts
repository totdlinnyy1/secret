import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

export const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE__MEASURMENT_ID,
})

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const app = firebase.app()
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider()



console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(')
