import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Header.styled'
import HeaderButton from './HeaderButton'
import HeaderSearchForm from './HeaderSearchForm'
import { menu } from '../../../styles/images'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../redux/modules/themeMode'
import LoginSignUpModal from '../../Modals/LoginSignUpModal/LoginSignUpModal'
import { loginSignUpModalToggle } from '../../../redux/modules/modalToggle'

const HeaderNavArea = () => {
  const dispatch = useDispatch()
  const currentThemeMode = useSelector((state) => state.themeMode.iconImage)
  const loginSignUpIsToggled = useSelector(
    (state) => state.modalToggle.loginSignUpToggled
  )
  const navigate = useNavigate()

  // state : 메뉴 토글, 로그인 모달
  const [MenuToggled, setMenuToggled] = useState(false)

  const navToggleHandler = () => {
    setMenuToggled((prev) => (prev ? false : true))
  }
  const goToMyPageHandler = () => {
    setMenuToggled((prev) => (prev ? false : true))
    navigate('/my')
  }
  const goToWriteHandler = () => {
    setMenuToggled((prev) => (prev ? false : true))
    navigate('/write')
  }
  const openLoginSignInModalHandler = () => {
    dispatch(loginSignUpModalToggle())
    setMenuToggled((prev) => (prev ? false : true))
  }
  const LogoutHandler = () => {
    setMenuToggled((prev) => (prev ? false : true))
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
  const isLogin = false
  return (
    <>
      {/* 로그인 모달 생성 */}
      {loginSignUpIsToggled && <LoginSignUpModal />}

      {/* Nav 구성요소 */}
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

        <S.StHeaderButtonArea $isToggled={MenuToggled}>
          <HeaderSearchForm setMenuToggled={setMenuToggled} />
          {HEADER_BUTTON.filter(
            (button) => button.loginVisible === isLogin
          ).map((button) => (
            <HeaderButton
              key={button.text}
              text={button.text}
              handler={button.handler}
            />
          ))}
        </S.StHeaderButtonArea>
      </S.StHeaderNavArea>
    </>
  )
}

export default HeaderNavArea
