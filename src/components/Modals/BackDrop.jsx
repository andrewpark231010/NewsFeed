import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loginSignUpModalToggle } from '../../redux/modules/modalToggle'

const BackDrop = () => {
  const dispatch = useDispatch()
  const modalToggleHandler = () => {
    dispatch(loginSignUpModalToggle())
  }
  return <StBackDrop onClick={modalToggleHandler}></StBackDrop>
}

const StBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`
export default BackDrop
