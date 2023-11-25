import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editModalToggle } from '../../redux/modules/modalToggle'
import * as St from './MyPageComponents.styled'
import { ReactComponent as EditIcon } from '../../styles/images/MyPageImage/editicon.svg'

const MyPageComponentUserInfo = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.user.currentUserInfo)
  const clickEditBtnHandler = () => {
    dispatch(editModalToggle())
  }
  return (
    <St.MyBox>
      <St.MyImgWrapper>
        <St.MyProfileImg src={userInfo.photoURL}></St.MyProfileImg>
      </St.MyImgWrapper>
      <St.MyProfileBox>
        <St.NickNameAndBtnWrapper>
          <St.MyProfileNickName>{userInfo.displayName}</St.MyProfileNickName>
          <St.MyEditBtn onClick={clickEditBtnHandler}>
            <EditIcon />
          </St.MyEditBtn>
        </St.NickNameAndBtnWrapper>
        <St.MyEmail>{userInfo.email}</St.MyEmail>
        <St.Intro>{userInfo.introduce}</St.Intro>
      </St.MyProfileBox>
    </St.MyBox>
  )
}

export default MyPageComponentUserInfo
