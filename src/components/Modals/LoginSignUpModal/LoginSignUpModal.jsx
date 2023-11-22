import React from 'react'
import ReactDOM from 'react-dom'
import BackDrop from '../BackDrop'
import LoginSignUpModalContainer from './LoginSignUpModalContainer'
const LoginSignUpModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <LoginSignUpModalContainer />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default LoginSignUpModal
