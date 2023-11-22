import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSignUpModalModeChange } from '../../../redux/modules/modalToggle'

const LoginSignUpModalModeChange = () => {
  const currentMode = useSelector(
    (state) => state.modalToggle.loginSignUpModalMode
  )
  const dispatch = useDispatch()
  const changeLoginSignUpModalModeHandler = () => {
    dispatch(loginSignUpModalModeChange())
  }
  return (
    <div>
      <span>{currentMode.modeChangeComment}</span>
      <button onClick={changeLoginSignUpModalModeHandler}>
        {currentMode.changeMode}
      </button>
    </div>
  )
}

export default LoginSignUpModalModeChange
