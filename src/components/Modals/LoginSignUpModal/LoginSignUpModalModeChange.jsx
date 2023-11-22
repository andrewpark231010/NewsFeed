import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSignUpModalModeChange } from '../../../redux/modules/modalToggle'
import * as S from './LoginSignUpModal.styled'

const LoginSignUpModalModeChange = () => {
  const currentMode = useSelector(
    (state) => state.modalToggle.loginSignUpModalMode
  )
  const dispatch = useDispatch()
  const changeLoginSignUpModalModeHandler = () => {
    dispatch(loginSignUpModalModeChange())
  }
  return (
    <S.StModeChangeDiv>
      <span>{currentMode.modeChangeComment}</span>
      <button onClick={changeLoginSignUpModalModeHandler}>
        {currentMode.changeMode}
      </button>
    </S.StModeChangeDiv>
  )
}

export default LoginSignUpModalModeChange
