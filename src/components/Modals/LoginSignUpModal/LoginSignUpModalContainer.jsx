import React from 'react'
import * as S from './LoginSignUpModal.styled'
import { useSelector } from 'react-redux'
import LoginSignUpModalForm from './LoginSignUpModalForm'
import LoginSignUpModalSocialArea from './LoginSignUpModalSocialArea'
import LoginSignUpModalModeChange from './LoginSignUpModalModeChange'

const LoginSignUpModalContainer = () => {
  // loginSignUpModalMode
  const currentMode = useSelector(
    (state) => state.modalToggle.loginSignUpModalMode
  )

  return (
    <S.StDiv>
      <span>{currentMode.text}</span>
      <LoginSignUpModalForm />
      <LoginSignUpModalSocialArea />
      <LoginSignUpModalModeChange />
    </S.StDiv>
  )
}

export default LoginSignUpModalContainer
