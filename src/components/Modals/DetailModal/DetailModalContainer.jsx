import React from 'react'
import * as S from './DetailModal.styled'
import DetailModalFirstLine from './DetailModalFirstLine'
import DetailModalSecondLine from './DetailModalSecondLine'
import { useDispatch, useSelector } from 'react-redux'
import { detailModalToggle } from '../../../redux/modules/modalToggle'
import { ReactComponent as Delete } from '../../../styles/images/DetailModal/delete.svg'
import { ReactComponent as Edit } from '../../../styles/images/MyPageImage/editicon.svg'
const DetailModalContainer = () => {
  const dispatch = useDispatch()
  const selectData = useSelector(
    (state) => state.modalToggle.currentDetailCardData
  )
  const userInfo = useSelector((state) => state.user.currentUserInfo)
  const closeButtonClickHandler = () => {
    dispatch(detailModalToggle())
  }
  return (
    <S.StDiv>
      <S.detailModalBtnContainer>
        {selectData.uid === userInfo.uid && (
          <>
            <S.DeleteButton>
              <Delete />
            </S.DeleteButton>
            <S.EditButton>
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
