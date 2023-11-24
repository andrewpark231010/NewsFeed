import React from 'react'
import * as S from './CardComponents.styled'
import CardComponentsFirstLine from './CardComponentsFirstLine'
import { useDispatch } from 'react-redux'
import {
  detailModalToggle,
  setDetailModalData,
} from '../../../redux/modules/modalToggle'

const CardComponents = ({ data }) => {
  const dispatch = useDispatch()

  const openDetailModalHandler = () => {
    dispatch(setDetailModalData(data))
    dispatch(detailModalToggle())
  }
  return (
    <S.StCardLi $img={data.imgsrc} onClick={openDetailModalHandler}>
      <CardComponentsFirstLine
        date={data.date}
        user={data.user}
        userProfile={data.userProfile}
      />
      <h2>{data.title}</h2>
      <S.StContentContainerDiv>
        <p>{data.content}</p>
      </S.StContentContainerDiv>
    </S.StCardLi>
  )
}

export default CardComponents
