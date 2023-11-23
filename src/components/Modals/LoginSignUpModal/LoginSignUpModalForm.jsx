import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './LoginSignUpModal.styled'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import {
  auth,
  getMemberRef,
  pathReference,
} from '../../../API/Firebase/Firebase'
import { loginSignUpModalToggle } from '../../../redux/modules/modalToggle'
import LoadingProgress from '../../CommonComponents/LoadingProgress'
import { setDoc } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'

const LoginSignUpModalForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const currentMode = useSelector(
    (state) => state.modalToggle.loginSignUpModalMode
  )

  /* TO-DO
    validation Check 구현 필요
  */

  // 로그인모드 일 때
  const LoginUserHandler = async () => {
    try {
      setIsLoading(true)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      setIsLoading(false)
      dispatch(loginSignUpModalToggle())
    } catch (err) {
      console.log(`<<로그인 오류>> ${err.message}`)
      setIsLoading(false)
    }
  }

  // 회원가입 모드일 때
  const signUpNewUserHandler = async () => {
    try {
      setIsLoading(true)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const fileName = 'defaultUser.webp'
      const url = await getDownloadURL(ref(pathReference, fileName))
      updateProfile(auth.currentUser, {
        displayName: userCredential.user.email.split('@')[0],
        photoURL: url,
      })
      setIsLoading(false)
      dispatch(loginSignUpModalToggle())
    } catch (err) {
      console.log(`<<회원가입 오류>> ${err.message}`)
      setIsLoading(false)
    }
  }
  const onFormHandler = (e) => {
    e.preventDefault()
    currentMode.id ? signUpNewUserHandler() : LoginUserHandler()
  }
  return (
    <S.StModalForm onSubmit={onFormHandler}>
      <input
        placeholder="이메일을 입력해주세요"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit">{currentMode.text}</button>
      <LoadingProgress loading={isLoading} />
    </S.StModalForm>
  )
}

export default LoginSignUpModalForm
