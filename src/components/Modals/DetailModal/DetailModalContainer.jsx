import React from 'react'

import * as S from './DetailModal.styled'
import DetailModalFirstLine from './DetailModalFirstLine'
import DetailModalSecondLine from './DetailModalSecondLine'
const DetailModalContainer = () => {
  return (
    <S.StDiv>
      <DetailModalFirstLine />
      <DetailModalSecondLine />
    </S.StDiv>
  )
}

export default DetailModalContainer
