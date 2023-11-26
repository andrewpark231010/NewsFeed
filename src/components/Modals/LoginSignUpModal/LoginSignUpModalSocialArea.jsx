import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './LoginSignUpModal.styled'
import { github, google, facebook } from '../../../styles/images'
import { auth } from '../../../API/Firebase/Firebase'
import { loginSignUpModalToggle } from '../../../redux/modules/modalToggle'
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
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
        await signInWithPopup(auth, googleProvider)
        setIsLoading(false)
        dispatch(loginSignUpModalToggle())
      } catch (err) {
        const credential = GoogleAuthProvider.credentialFromError(err)
        console.log(`<<구글로그인 오류>> ${credential}`)
      }
    }
    loginUserGoogleAuthHandler()
  }

  const githubLoginHandler = () => {
    const githubProvider = new GithubAuthProvider()
    const loginUserGithubAuthHandler = async () => {
      try {
        setIsLoading(true)
        await signInWithPopup(auth, githubProvider)
        setIsLoading(false)
        dispatch(loginSignUpModalToggle())
      } catch (err) {
        console.error(err)
        // const credential = GithubAuthProvider.credentialFromError(err)
        // console.log(`<<깃허브로그인 오류>> ${credential}`, credential)
      }
    }
    loginUserGithubAuthHandler()
  }

  const facebookLoginHandler = () => {
    const facebookProvider = new FacebookAuthProvider()
    const loginUserGithubAuthHandler = async () => {
      try {
        setIsLoading(true)
        await signInWithPopup(auth, facebookProvider)
        setIsLoading(false)
        dispatch(loginSignUpModalToggle())
      } catch (err) {
        console.error(err)
        const credential = facebookProvider.credentialFromError(err)
        console.log(`<<페이스북로그인 오류>> ${credential}`, credential)
      }
    }
    loginUserGithubAuthHandler()
  }
  return (
    <S.StLoginModalSocialAreaDiv>
      <LoadingProgress loading={isLoading} />
      <span>소셜계정으로 {currentMode.text}</span>
      <S.StLoginModalSocialButtonDiv>
        <button onClick={githubLoginHandler}>
          <figure>
            <img src={github} />
          </figure>
        </button>
        <button onClick={googleLoginHandler}>
          <figure>
            <img src={google} />
          </figure>
        </button>
        <button onClick={facebookLoginHandler}>
          <figure>
            <img src={facebook} />
          </figure>
        </button>
      </S.StLoginModalSocialButtonDiv>
    </S.StLoginModalSocialAreaDiv>
  )
}

export default LoginSignUpModalSocialArea
