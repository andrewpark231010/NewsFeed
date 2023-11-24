import React from 'react'
import * as S from './Header.styled'
import HeaderTitle from './HeaderTitle'
import HeaderNavArea from './HeaderNavArea'
import DetailModal from '../../Modals/DetailModal/DetailModal'
import { useSelector } from 'react-redux'

const Header = () => {
  const isDetailModalToggled = useSelector(
    (state) => state.modalToggle.detailToggled
  )
  return (
    <>
      {isDetailModalToggled && <DetailModal />}
      <S.StHeader>
        <HeaderTitle />
        <HeaderNavArea />
      </S.StHeader>
    </>
  )
}

export default Header
