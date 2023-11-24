import React from 'react'
import EditNickNameAndIntroForm from './EditNickNameAndIntroForm'
import * as St from './EditProfileModal.styled'
function EditProfileContainer() {
  return (
    <St.StContainer>
      <St.StProfileH1>프로필 수정</St.StProfileH1>
      <></>
      <EditNickNameAndIntroForm />
    </St.StContainer>
  )
}

export default EditProfileContainer
