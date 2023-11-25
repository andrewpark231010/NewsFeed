import { initializeApp } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'
import { doc, getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FB_API_KEY,
//   authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// }
const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const storage = getStorage()
const pathReference = ref(storage, 'images')

const getMemberRef = (memberUID) => {
  return doc(db, 'members', memberUID)
}

const loginOutUserHandler = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.log(`<<로그아웃 오류>> ${err.message}`)
  }
}

export { loginOutUserHandler, auth, db, pathReference, getMemberRef }
