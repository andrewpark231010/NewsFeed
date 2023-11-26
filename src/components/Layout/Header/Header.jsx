import React, { useState } from 'react'
import * as S from './Header.styled'
import HeaderTitle from './HeaderTitle'
import HeaderNavArea from './HeaderNavArea'
import DetailModal from '../../Modals/DetailModal/DetailModal'
import { useSelector } from 'react-redux'

const Header = () => {
  const isDetailModalToggled = useSelector(
    (state) => state.modalToggle.detailToggled
  )
  const [menuToggled, setMenuToggled] = useState(false)
  return (
    <>
      {isDetailModalToggled && <DetailModal />}
      <S.StHeader>
        <HeaderTitle
          menuToggled={menuToggled}
          setMenuToggled={setMenuToggled}
        />
        <HeaderNavArea
          setMenuToggled={setMenuToggled}
          menuToggled={menuToggled}
        />
      </S.StHeader>
    </>
  )
}

export default Header
