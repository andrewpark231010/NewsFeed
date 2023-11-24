import React from 'react'
import * as S from './CardComponents.styled'

const CardComponentsFirstLine = ({ user, date, userProfile }) => {
  date = date.toDate()
  const formatDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`
  return (
    <S.StCardLiFirstLine>
      <figure>
        <img src={userProfile} />
      </figure>
      <S.StCardLiFirstLineText>
        <span>{user}</span>
        <span>{formatDate}</span>
      </S.StCardLiFirstLineText>
    </S.StCardLiFirstLine>
  )
}

export default CardComponentsFirstLine
