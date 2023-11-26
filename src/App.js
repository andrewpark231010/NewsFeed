import { useEffect } from 'react'
import Router from './router/Router'
import { onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth, db, getMemberRef, pathReference } from './API/Firebase/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from './redux/modules/user'
import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore'
import { setPostData } from './redux/modules/postData'
import GlobalStyle from './styles/GlobalStyle'
import { GlobalFont } from './styles/fonts'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { getDownloadURL, ref } from '@firebase/storage'

function App() {
  const dispatch = useDispatch()
  const getPostData = async () => {
    const q = query(collection(db, 'post'), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    let postData = []
    querySnapshot.forEach((item) => postData.push(item.data()))
    dispatch(setPostData(postData))
  }

  if (localStorage.getItem('themeMode') === null)
    localStorage.setItem('themeMode', 'light')
  const data = useSelector((state) => state.user.currentUserInfo)
  useEffect(() => {
    getPostData()
    onAuthStateChanged(auth, (user) => {
      const getIntroduce = async () => {
        const data = await getDoc(getMemberRef(user.uid))

        if (data.data()) {
          dispatch(getUserInfo({ ...user, introduce: data.data().introduce }))
        } else {
          await setDoc(getMemberRef(user.uid), {
            introduce: '',
          })
          if (!user.displayName && !user.photoURL) {
            const fileName = 'defaultUser.webp'
            const url = await getDownloadURL(ref(pathReference, fileName))
            updateProfile(auth.currentUser, {
              displayName: user.email.split('@')[0],
              photoURL: url,
            })
            dispatch(getUserInfo({ ...auth.currentUser, introduce: '' }))
          }
        }
      }
      user && getIntroduce()
    })
  }, [])
  const currentThemeMode = useSelector((state) => state.themeMode.mode)
  return (
    <>
      <ThemeProvider theme={theme[currentThemeMode]}>
        <GlobalStyle />
        <GlobalFont />
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App
