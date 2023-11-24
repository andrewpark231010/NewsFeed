import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  loginSignUpModalToggle,
  editModalToggle,
  detailModalToggle,
} from '../../redux/modules/modalToggle'

const BackDrop = ({ modalMode }) => {
  const dispatch = useDispatch()
  const modalToggleHandler = () => {
    if (modalMode === 'login') {
      dispatch(loginSignUpModalToggle())
    }
    if (modalMode === 'edit') {
      dispatch(editModalToggle())
    }
    if (modalMode === 'detail') {
      dispatch(detailModalToggle())
    }
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
  backdrop-filter: blur(5px);
  z-index: 10;
`
export default BackDrop
