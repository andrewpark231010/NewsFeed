import React from 'react'
import { search } from '../../../styles/images'
import * as S from './Header.styled'

const HeaderSearchForm = ({ setIsToggled }) => {
  const searchSubmitHandler = (e) => {
    e.preventDefault()
    setIsToggled()
  }
  return (
    <S.StHeaderForm onSubmit={searchSubmitHandler}>
      <span>검색</span>
      <input />
      <button>
        <figure>
          <img src={search} />
        </figure>
      </button>
    </S.StHeaderForm>
  )
}

export default HeaderSearchForm
