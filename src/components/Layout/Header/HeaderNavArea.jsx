import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Header.styled'
import HeaderButton from './HeaderButton'
import HeaderSearchForm from './HeaderSearchForm'
import { menu } from '../../../styles/images'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../redux/modules/themeMode'

const HeaderNavArea = () => {
  const dispatch = useDispatch()
  const currentThemeMode = useSelector((state) => state.themeMode.iconImage)
  const navigate = useNavigate()
  const [isToggled, setIsToggled] = useState(false)

  const navToggleHandler = () => {
    setIsToggled((prev) => (prev ? false : true))
  }
  const goToMyPageHandler = () => {
    setIsToggled((prev) => (prev ? false : true))
    navigate('/my')
  }
  const goToWriteHandler = () => {
    setIsToggled((prev) => (prev ? false : true))
    navigate('/write')
  }
  const openLoginSignInModalHandler = () => {}
  const LogoutHandler = () => {
    setIsToggled((prev) => (prev ? false : true))
  }
  const themeChangeHandler = () => {
    dispatch(toggleTheme())
  }
  const HEADER_BUTTON = [
    { text: '내 정보', handler: goToMyPageHandler, loginVisible: true },
    { text: '글쓰기', handler: goToWriteHandler, loginVisible: true },
    {
      text: '로그인 • 회원가입',
      handler: openLoginSignInModalHandler,
      loginVisible: false,
    },
    { text: '로그아웃', handler: LogoutHandler, loginVisible: true },
  ]
  const isLogin = true
  return (
    <S.StHeaderNavArea>
      <S.StHeaderModeChangeButton onClick={themeChangeHandler}>
        <figure>
          <img src={currentThemeMode} />
        </figure>
      </S.StHeaderModeChangeButton>
      <S.StHeaderMobileToggleButton onClick={navToggleHandler}>
        <figure>
          <img src={menu} />
        </figure>
      </S.StHeaderMobileToggleButton>

      <S.StHeaderButtonArea $isToggled={isToggled}>
        <HeaderSearchForm setIsToggled={setIsToggled} />
        {HEADER_BUTTON.filter((button) => button.loginVisible === isLogin).map(
          (button) => (
            <HeaderButton
              key={button.text}
              text={button.text}
              handler={button.handler}
            />
          )
        )}
      </S.StHeaderButtonArea>
    </S.StHeaderNavArea>
  )
}

export default HeaderNavArea
