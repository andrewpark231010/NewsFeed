import React from 'react'
import * as S from './CardComponents.styled'
import CardComponentsFirstLine from './CardComponentsFirstLine'

const CardComponents = ({ data }) => {
  return (
    <S.StCardLi $img={data.imgsrc}>
      <CardComponentsFirstLine date={data.date} user={data.user} />
      <h2>{data.title}</h2>
      <S.StContentContainerDiv>
        <p>{data.content}</p>
      </S.StContentContainerDiv>
    </S.StCardLi>
  )
}

export default CardComponents
