import React from 'react'
import * as St from './MyPageComponents.styled'
import ProfileImg from '/Users/a1234/Desktop/newsfeedproject/NewsFeed/src/styles/images/MyPageImage/sampleImg.jpg'
import EditIcon from '/Users/a1234/Desktop/newsfeedproject/NewsFeed/src/styles/images/MyPageImage/editicon.svg'
function MyPageComponentFrame() {
  return (
    <div>
      <St.MyBox>
        <St.MyImgWrapper>
          <St.MyProfileImg src={ProfileImg}></St.MyProfileImg>
        </St.MyImgWrapper>

        <St.MyProfileBox>
          <St.NickNameAndBtnWrapper>
            <St.MyProfileNickName> 최우제 </St.MyProfileNickName>
            <St.MyEditBtn src={EditIcon}></St.MyEditBtn>
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
