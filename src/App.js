import { useEffect, useState } from 'react'
import Router from './router/Router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './API/Firebase/Firebase'
import { useDispatch } from 'react-redux'
import { getUserInfo } from './redux/modules/user'
import LoadingProgress from './components/CommonComponents/LoadingProgress'

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    onAuthStateChanged(auth, (user) => {
      console.log('current login Info', user)
      dispatch(getUserInfo(user))
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
