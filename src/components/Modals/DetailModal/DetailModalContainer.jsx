import React from 'react'

import * as S from './DetailModal.styled'
import DetailModalFirstLine from './DetailModalFirstLine'
import DetailModalSecondLine from './DetailModalSecondLine'
import { useDispatch } from 'react-redux'
import { detailModalToggle } from '../../../redux/modules/modalToggle'
const DetailModalContainer = () => {
  const dispatch = useDispatch()
  const closeButtonClickHandler = () => {
    dispatch(detailModalToggle())
  }
  return (
    <S.StDiv>
      <S.CloseButton onClick={closeButtonClickHandler} />
      <DetailModalFirstLine />
      <DetailModalSecondLine />
    </S.StDiv>
  )
}

export default DetailModalContainer
