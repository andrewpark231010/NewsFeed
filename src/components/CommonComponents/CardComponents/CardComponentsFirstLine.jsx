import React from 'react'
import * as S from './CardComponents.styled'

const CardComponentsFirstLine = () => {
  return (
    <S.StCardLiFirstLine>
      <figure>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
      </figure>
      <S.StCardLiFirstLineText>
        <span>2023-10-10</span>
        <span>홍길동 님</span>
      </S.StCardLiFirstLineText>
    </S.StCardLiFirstLine>
  )
}

export default CardComponentsFirstLine
