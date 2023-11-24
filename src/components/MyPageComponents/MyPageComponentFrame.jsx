import MyPageComponentUserInfo from './MyPageComponentUserInfo'
import * as St from './MyPageComponents.styled'
import { useSelector } from 'react-redux'
import EditProfileModal from '../Modals/EditProfileModal/EditProfileModal'
import CardComponents from '../CommonComponents/CardComponents/CardComponents'

function MyPageComponentFrame() {
  const modalToggle = useSelector((state) => state.modalToggle.editToggled)
  const userInfo = useSelector((state) => state.user.currentUserInfo)
  const userData = useSelector((state) => state.postData.postData).filter(
    (post) => post.uid === userInfo.uid
  )

  return (
    <div>
      {modalToggle && <EditProfileModal />}
      <MyPageComponentUserInfo />
      <St.MyPostWrapper>
        <St.MyPost>
          My 작성글 - <span>{userData.length}개</span>
        </St.MyPost>
        <St.MyPostList>
          {userData.map((post) => (
            <CardComponents key={post.id} data={post} />
          ))}
        </St.MyPostList>
      </St.MyPostWrapper>
    </div>
  )
}

export default MyPageComponentFrame
