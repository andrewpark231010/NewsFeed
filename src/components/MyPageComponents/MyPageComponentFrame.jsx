import React, { useEffect } from 'react'
import * as St from './MyPageComponents.styled'
import { editIcon } from '../../styles/images'
import { useSelector } from 'react-redux'
import { getDoc } from 'firebase/firestore'
import { getMemberRef } from '../../API/Firebase/Firebase'

function MyPageComponentFrame() {
  const userInfo = useSelector((state) => state.user.currentUserInfo)
  console.log(userInfo)
  useEffect(() => {}, [])
  // 2. 버튼 클릭 시 useDispatch를 통해서 modules-modalToggle-editToggled 값을 true면 false false면 true로 변경되게 로직 구성
  return (
    <div>
      {/* 3. 모달 조건부 랜더링 처리 */}
      {/* editToggled 의 값에 따라서 EditProfileModal이 나오게 처리 */}
      <St.MyBox>
        <St.MyImgWrapper>
          <St.MyProfileImg src={userInfo.photoURL}></St.MyProfileImg>
        </St.MyImgWrapper>

        <St.MyProfileBox>
          <St.NickNameAndBtnWrapper>
            <St.MyProfileNickName>{userInfo.displayName}</St.MyProfileNickName>
            {/* 1. 버튼클릭이벤트 생성 */}
            <St.MyEditBtn src={editIcon}></St.MyEditBtn>
          </St.NickNameAndBtnWrapper>

          <St.MyEmailAndIntroWrapper>
            <St.MyEmail>{userInfo.email}</St.MyEmail>
            <St.Intro>{userInfo.introduce}</St.Intro>
          </St.MyEmailAndIntroWrapper>
        </St.MyProfileBox>
      </St.MyBox>

      <>
        <St.MyPostWrapper>
          <St.MyPost>My 작성글</St.MyPost>
        </St.MyPostWrapper>
      </>
    </div>
  )
}

export default MyPageComponentFrame
