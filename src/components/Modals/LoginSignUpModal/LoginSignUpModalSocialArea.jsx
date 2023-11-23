import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './LoginSignUpModal.styled'
import { github, google, twitter } from '../../../styles/images'
import { auth } from '../../../API/Firebase/Firebase'
import { loginSignUpModalToggle } from '../../../redux/modules/modalToggle'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import LoadingProgress from '../../CommonComponents/LoadingProgress'

const LoginSignUpModalSocialArea = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const currentMode = useSelector(
    (state) => state.modalToggle.loginSignUpModalMode
  )
  const googleLoginHandler = () => {
    const googleProvider = new GoogleAuthProvider()
    const loginUserGoogleAuthHandler = async () => {
      try {
        setIsLoading(true)
        const result = await signInWithPopup(auth, googleProvider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        setIsLoading(false)
        dispatch(loginSignUpModalToggle())
      } catch (err) {
        const credential = GoogleAuthProvider.credentialFromError(err)
        console.log(`<<구글로그인 오류>> ${credential}`)
      }
    }
    loginUserGoogleAuthHandler()
  }
  return (
    <S.StLoginModalSocialAreaDiv>
      <LoadingProgress loading={isLoading} />
      <span>소셜계정으로 {currentMode.text}</span>
      <S.StLoginModalSocialButtonDiv>
        <button>
          <figure>
            <img src={github} />
          </figure>
        </button>
        <button onClick={googleLoginHandler}>
          <figure>
            <img src={google} />
          </figure>
        </button>
        <button>
          <figure>
            <img src={twitter} />
          </figure>
        </button>
      </S.StLoginModalSocialButtonDiv>
    </S.StLoginModalSocialAreaDiv>
  )
}

export default LoginSignUpModalSocialArea
