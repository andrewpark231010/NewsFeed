import React from 'react'
import * as S from './CardComponents.styled'

const CardComponentsFirstLine = ({ title, date }) => {
  return (
    <S.StCardLiFirstLine>
      <figure>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" />
      </figure>
      <S.StCardLiFirstLineText>
        <span>{title}</span>
        <span>{date}</span>
      </S.StCardLiFirstLineText>
    </S.StCardLiFirstLine>
  )
}

export default CardComponentsFirstLine
