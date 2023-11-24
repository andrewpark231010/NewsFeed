import { React, useState } from 'react'
import * as St from './EditProfileModal.styled'
import { MyProfileUploadImg } from '../../../styles/images'
import { auth, db } from '../../../API/Firebase/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { doc, updateDoc } from 'firebase/firestore'
import { pathReference } from '../../../API/Firebase/Firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { editModalToggle } from '../../../redux/modules/modalToggle'

function EditNickNameAndIntroForm() {
  const [img, setImg] = useState('')
  const userData = useSelector((state) => state.user.currentUserInfo)
  const [nickName, setNickName] = useState(userData.displayName)
  const [intro, setIntro] = useState(userData.introduce)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const imgSelectHandler = (event) => {
    setImg(event.target.files[0])
  }
  console.log(userData)
  const nickNameSubmitHandler = (event) => {
    setNickName(event.target.value)
  }

  const introSubmitHandler = (event) => {
    setIntro(event.target.value)
  }

  const compBtnClickHandler = (event) => {
    event.preventDefault()
    if (
      nickName === userData.displayName &&
      intro === userData.introduce &&
      !img
    ) {
      window.alert('수정사항이 없습니다.')
      return
    }
    updateUserInfo()
  }

  const updateUserInfo = async () => {
    if (userData.introduce !== intro) {
      const ref = doc(db, 'members', userData.uid)

      await updateDoc(ref, { introduce: intro })
    }
    if (userData.displayName !== nickName || img) {
      let imgUrl = userData.photoURL
      if (img) {
        const upDateProfileRef = ref(pathReference, `profileImages/${img.name}`)
        await uploadBytes(upDateProfileRef, img)
        imgUrl = await getDownloadURL(upDateProfileRef)
      }
      updateProfile(auth.currentUser, {
        displayName: nickName,
        photoURL: imgUrl,
      })
    }
    dispatch(editModalToggle())
    navigate('/')
  }

  return (
    <St.StEditForm onSubmit={compBtnClickHandler}>
      <St.StProfileImgH2>프로필 이미지</St.StProfileImgH2>
      <St.StImgBox>
        <St.StLabel $img={MyProfileUploadImg} htmlFor="img"></St.StLabel>
        <St.StImgInput onChange={imgSelectHandler} type="file" id="img" />
        <St.StImgSpan>{img.name}</St.StImgSpan>
      </St.StImgBox>

      <St.StInputDiv>
        <label htmlFor="nickname">닉네임</label>
        <input
          onChange={nickNameSubmitHandler}
          value={nickName}
          id="nickname"
          type="text"
        />
      </St.StInputDiv>
      <St.StInputDiv>
        <label htmlFor="intro">소개글</label>
        <textarea
          value={intro}
          onChange={introSubmitHandler}
          id="intro"
          type="text"
        />
      </St.StInputDiv>

      <></>
      <St.StcompBtn type="submit">수정완료</St.StcompBtn>
    </St.StEditForm>
  )
}

export default EditNickNameAndIntroForm
