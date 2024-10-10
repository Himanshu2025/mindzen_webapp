import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwEeEkQtrErwStcbPlzxywGMZaERMfP4I',
  authDomain: 'mindzen-2a3e3.firebaseapp.com',
  projectId: 'mindzen-2a3e3',
  storageBucket: 'mindzen-2a3e3.appspot.com',
  messagingSenderId: '357614382211',
  appId: '1:357614382211:web:e84b6af8bd24104e6a3fb6'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()
export default db
