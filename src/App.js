import { useEffect, useState } from 'react'
import Router from './router/Router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db, getMemberRef } from './API/Firebase/Firebase'
import { useDispatch } from 'react-redux'
import { getUserInfo } from './redux/modules/user'
import LoadingProgress from './components/CommonComponents/LoadingProgress'
import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore'
import { setPostData } from './redux/modules/postData'

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const getPostData = async () => {
    const q = query(collection(db, 'post'), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    let postData = []
    querySnapshot.forEach((item) => postData.push(item.data()))
    dispatch(setPostData(postData))
  }

  useEffect(() => {
    setIsLoading(true)
    getPostData()
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      const getIntroduce = async () => {
        const data = await getDoc(getMemberRef(user.uid))
        if (data.data()) {
          dispatch(getUserInfo({ ...user, introduce: data.data().introduce }))
        } else {
          await setDoc(getMemberRef(user.uid), {
            introduce: '',
          })
          dispatch(getUserInfo({ ...user, introduce: '' }))
        }
      }
      user && getIntroduce()
    })
    setIsLoading(false)
  }, [])
  return (
    <>
      <LoadingProgress loading={isLoading} />
      <Router />
    </>
  )
}

export default App
