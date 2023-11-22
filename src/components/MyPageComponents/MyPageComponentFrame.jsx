import React from 'react'
import * as St from './MyPageComponents.styled'
import { editIcon, sampleImg } from '../../styles/images'
function MyPageComponentFrame() {
  // 2. 버튼 클릭 시 useDispatch를 통해서 modules-modalToggle-editToggled 값을 true면 false false면 true로 변경되게 로직 구성
  return (
    <div>
      {/* 3. 모달 조건부 랜더링 처리 */}
      {/* editToggled 의 값에 따라서 EditProfileModal이 나오게 처리 */}
      <St.MyBox>
        <St.MyImgWrapper>
          <St.MyProfileImg src={sampleImg}></St.MyProfileImg>
        </St.MyImgWrapper>

        <St.MyProfileBox>
          <St.NickNameAndBtnWrapper>
            <St.MyProfileNickName> 최우제 </St.MyProfileNickName>
            {/* 1. 버튼클릭이벤트 생성 */}
            <St.MyEditBtn src={editIcon}></St.MyEditBtn>
          </St.NickNameAndBtnWrapper>

          <St.MyEmailAndIntroWrapper>
            <St.MyEmail>zeus1232423433212@gmail.com</St.MyEmail>
            <St.Intro>
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하
            </St.Intro>
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
