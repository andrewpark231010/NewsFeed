import React from 'react'
import * as S from './DetailModal.styled'
import DetailModalFirstLine from './DetailModalFirstLine'
import DetailModalSecondLine from './DetailModalSecondLine'
import { useDispatch, useSelector } from 'react-redux'
import { detailModalToggle } from '../../../redux/modules/modalToggle'
import { ReactComponent as Delete } from '../../../styles/images/DetailModal/delete.svg'
import { ReactComponent as Edit } from '../../../styles/images/MyPageImage/editicon.svg'
import { useNavigate } from 'react-router-dom'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../../../API/Firebase/Firebase'
import { setPostData } from '../../../redux/modules/postData'
const DetailModalContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selectData = useSelector(
    (state) => state.modalToggle.currentDetailCardData
  )
  const userInfo = useSelector((state) => state.user.currentUserInfo)

  const closeButtonClickHandler = () => {
    dispatch(detailModalToggle())
  }
  const goToEditPageHandler = () => {
    navigate(`/write/editPost`)
    dispatch(detailModalToggle())
  }
  const deleteHandler = () => {
    const deletePostHandler = async () => {
      await deleteDoc(doc(db, 'post', selectData.id))
      const q = query(collection(db, 'post'), orderBy('date', 'desc'))
      const querySnapshot = await getDocs(q)
      let postData = []
      querySnapshot.forEach((item) => postData.push(item.data()))
      dispatch(setPostData(postData))
    }
    if (window.confirm('정말 삭제하시겠습니까?')) deletePostHandler()
    dispatch(detailModalToggle())
  }

  return (
    <S.StDiv>
      <S.detailModalBtnContainer>
        {selectData.uid === userInfo.uid && (
          <>
            <S.DeleteButton onClick={deleteHandler}>
              <Delete />
            </S.DeleteButton>
            <S.EditButton onClick={goToEditPageHandler}>
              <Edit />
            </S.EditButton>
          </>
        )}
        <S.CloseButton onClick={closeButtonClickHandler} />
      </S.detailModalBtnContainer>

      <DetailModalFirstLine />
      <DetailModalSecondLine />
    </S.StDiv>
  )
}

export default DetailModalContainer
