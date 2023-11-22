import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './LoginSignUpModal.styled'
import { github, google, naver } from '../../../styles/images'

const LoginSignUpModalSocialArea = () => {
  const currentMode = useSelector(
    (state) => state.modalToggle.loginSignUpModalMode
  )
  return (
    <S.StLoginModalSocialAreaDiv>
      <span>소셜계정으로 {currentMode.text}</span>
      <S.StLoginModalSocialButtonDiv>
        <button>
          <figure>
            <img src={github} />
          </figure>
        </button>
        <button>
          <figure>
            <img src={google} />
          </figure>
        </button>
        <button>
          <figure>
            <img src={naver} />
          </figure>
        </button>
      </S.StLoginModalSocialButtonDiv>
    </S.StLoginModalSocialAreaDiv>
  )
}

export default LoginSignUpModalSocialArea
