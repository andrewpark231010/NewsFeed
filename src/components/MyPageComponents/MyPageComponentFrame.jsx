import * as St from './MyPageComponents.styled'
import { useSelector, useDispatch } from 'react-redux'
import { editModalToggle } from '../../redux/modules/modalToggle'
import EditProfileModal from '../Modals/EditProfileModal/EditProfileModal'

// 2. 버튼 클릭 시 useDispatch를 통해서 modules-modalToggle-editToggled 값을 true면 false false면 true로 변경되게 로직 구성
function MyPageComponentFrame() {
  const dispatch = useDispatch()
  const modalToggle = useSelector((state) => state.modalToggle.editToggled)
  const userInfo = useSelector((state) => state.user.currentUserInfo)
  const clickEditBtnHandler = () => {
    //editToggled 값을 true면 false false면 true로 변경되는 액션 호출
    dispatch(editModalToggle())
  }

  return (
    <div>
      {modalToggle && <EditProfileModal />}
      <St.MyBox>
        <St.MyImgWrapper>
          <St.MyProfileImg src={userInfo.photoURL}></St.MyProfileImg>
        </St.MyImgWrapper>

        <St.MyProfileBox>
          <St.NickNameAndBtnWrapper>
            <St.MyProfileNickName>{userInfo.displayName}</St.MyProfileNickName>
            {/* 1. 버튼클릭이벤트 생성 */}
            <St.MyEditBtn onClick={clickEditBtnHandler}></St.MyEditBtn>
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
