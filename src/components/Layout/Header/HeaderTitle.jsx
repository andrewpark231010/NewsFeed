import React from 'react'
import * as S from './Header.styled'
import { titleLogo } from '../../../styles/images'
import { useNavigate } from 'react-router-dom'

const HeaderTitle = ({ setMenuToggled, menuToggled }) => {
  const navigate = useNavigate()
  const goToMainPageHandler = () => {
    if (menuToggled) setMenuToggled(false)
    navigate('/')
  }
  return (
    <S.StHeaderTitle onClick={goToMainPageHandler}>
      <figure>
        <img src={titleLogo} />
      </figure>
      <S.StHeaderHiddenTitle>Compile Game</S.StHeaderHiddenTitle>
    </S.StHeaderTitle>
  )
}

export default HeaderTitle
