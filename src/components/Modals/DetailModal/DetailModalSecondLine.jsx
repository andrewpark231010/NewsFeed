import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './DetailModal.styled'

const DetailModalSecondLine = () => {
  const selectData = useSelector(
    (state) => state.modalToggle.currentDetailCardData
  )
  return (
    <>
      <S.StSecondLineContent>{selectData.content}</S.StSecondLineContent>
    </>
  )
}

export default DetailModalSecondLine
