import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './DetailModal.styled'
const DetailModalFirstLine = () => {
  const selectData = useSelector(
    (state) => state.modalToggle.currentDetailCardData
  )
  const date = selectData.date.toDate()
  const formatDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`
  return (
    <S.StFirstDiv $backgroundImage={selectData.imgsrc}>
      <S.StDetailModalTitle>{selectData.title}</S.StDetailModalTitle>
      <S.StFirstLineUserInfo>
        <figure>
          <img src={selectData.userProfile} />
        </figure>
        <div>
          <S.StDetailModalDate>{formatDate}</S.StDetailModalDate>
          <S.StDeatilModalUserName>{selectData.user}</S.StDeatilModalUserName>
        </div>
      </S.StFirstLineUserInfo>
    </S.StFirstDiv>
  )
}

export default DetailModalFirstLine
