import MyPageComponentUserInfo from './MyPageComponentUserInfo'
import * as St from './MyPageComponents.styled'
import { useSelector } from 'react-redux'
import EditProfileModal from '../Modals/EditProfileModal/EditProfileModal'
import CardComponents from '../CommonComponents/CardComponents/CardComponents'
import { useEffect } from 'react'

function MyPageComponentFrame() {
  const modalToggle = useSelector((state) => state.modalToggle.editToggled)
  const userInfo = useSelector((state) => state.user.currentUserInfo)

  const userData = useSelector((state) => state.postData.postData).filter(
    (post) => post.uid === userInfo.uid
  )
  userData.sort((a, b) => b['date'] - a['date'])

  return (
    <div>
      {modalToggle && <EditProfileModal />}
      <MyPageComponentUserInfo />
      <St.MyPostWrapper>
        <St.MyPost>
          My 작성글 - <span>{userData.length}개</span>
        </St.MyPost>
        {userData.length === 0 && (
          <St.MainCardListNoListMessage>
            <span>등록된 내용이 없습니다.</span>
          </St.MainCardListNoListMessage>
        )}
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
