import { useEffect, useState } from 'react'
import Router from './router/Router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, getMemberRef } from './API/Firebase/Firebase'
import { useDispatch } from 'react-redux'
import { getUserInfo } from './redux/modules/user'
import LoadingProgress from './components/CommonComponents/LoadingProgress'
import { getDoc, setDoc } from 'firebase/firestore'

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    onAuthStateChanged(auth, (user) => {
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
