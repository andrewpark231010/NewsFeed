import { React, useState } from 'react'
import * as St from './EditProfileModal.styled'
import { MyProfileUploadImg } from '../../../styles/images'
function EditNickNameAndIntroForm() {
  const [img, setImg] = useState('')

  const imgSelectHandler = (event) => {
    setImg(event.target.files[0])
  }
  return (
    <St.StEditForm>
      <St.StProfileImgH2>프로필 이미지</St.StProfileImgH2>
      <St.StImgBox>
        <St.StLabel $img={MyProfileUploadImg} htmlFor="img"></St.StLabel>
        <St.StImgInput onChange={imgSelectHandler} type="file" id="img" />
        <St.StImgSpan>{img.name}</St.StImgSpan>
      </St.StImgBox>

      <St.StInputDiv>
        <label htmlFor="nickname">닉네임</label>
        <input id="nickname" type="text" />
      </St.StInputDiv>
      <St.StInputDiv>
        <label htmlFor="intro">소개글</label>
        <textarea id="intro" type="text" />
      </St.StInputDiv>

      <></>
      <St.StcompBtn>수정완료</St.StcompBtn>
    </St.StEditForm>
  )
}

export default EditNickNameAndIntroForm
