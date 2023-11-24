import React from 'react'
import EditProfileContainer from './EditProfileContainer'
import ReactDOM from 'react-dom'
import BackDrop from '../BackDrop'

const EditProfileModal = () => {
  // 4. LoginSignUpModal.jsx를 참고하여 backdrop컴포넌트와 만들 모달 내부의 컴포넌트를 index.js에 있는 경로로 연결
  // 5. 모달 내부 컴포넌트 구성
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop modalMode="edit" />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <EditProfileContainer />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default EditProfileModal
