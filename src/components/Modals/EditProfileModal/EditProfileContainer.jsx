import React from 'react'
import EditNickNameAndIntroForm from './EditNickNameAndIntroForm'
import EditProfileImage from './EditProfileImage'

function EditProfileContainer() {
  return (
    <div>
      <h1>프로필 수정</h1>
      <EditProfileImage />
      <></>
      <EditNickNameAndIntroForm />
    </div>
  )
}

export default EditProfileContainer
