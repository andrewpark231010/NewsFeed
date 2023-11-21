import React from 'react'
import * as S from './Header.styled'
import { titleLogo } from '../../../styles/images'
import { useNavigate } from 'react-router-dom'

const HeaderTitle = () => {
  const navigate = useNavigate()
  const goToMainPageHandler = () => {
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
