import React from 'react'
import EditProfileContainer from './EditProfileContainer'
import ReactDOM from 'react-dom'
import BackDrop from '../BackDrop'

const EditProfileModal = () => {
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
