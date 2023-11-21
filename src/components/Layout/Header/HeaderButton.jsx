import React from 'react'
import * as S from './Header.styled'

const HeaderButton = ({ handler, text }) => {
  return <S.StHeaderButton onClick={handler}>{text}</S.StHeaderButton>
}

export default HeaderButton
