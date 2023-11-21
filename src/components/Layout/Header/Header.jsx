import React from 'react'
import * as S from './Header.styled'
import HeaderTitle from './HeaderTitle'
import HeaderNavArea from './HeaderNavArea'

const Header = () => {
  return (
    <S.StHeader>
      <HeaderTitle />
      <HeaderNavArea />
    </S.StHeader>
  )
}

export default Header
