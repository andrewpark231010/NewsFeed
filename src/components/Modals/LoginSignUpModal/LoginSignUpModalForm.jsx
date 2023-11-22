import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './LoginSignUpModal.styled'

const LoginSignUpModalForm = () => {
  const currentMode = useSelector(
    (state) => state.modalToggle.loginSignUpModalMode
  )
  return (
    <S.StModalForm>
      <input placeholder="이메일을 입력해주세요" type="email" />
      <button>{currentMode.text}</button>
    </S.StModalForm>
  )
}

export default LoginSignUpModalForm
