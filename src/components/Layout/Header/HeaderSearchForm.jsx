import React from 'react'
import { search } from '../../../styles/images'
import deleteBtn from '../../../styles/images/HeaderImage/delete.svg'
import * as S from './Header.styled'
import { setSearchValue } from '../../../redux/modules/postData'
import { useDispatch, useSelector } from 'react-redux'

const HeaderSearchForm = ({ setIsToggled }) => {
  const dispatch = useDispatch()
  const inputValue = useSelector((state) => state.postData.searchValue)
  const setSearchValueHandler = (e) => {
    dispatch(setSearchValue(e.target.value))
  }
  const searchSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <S.StHeaderForm onSubmit={searchSubmitHandler}>
      <span>검색</span>
      <input value={inputValue} onChange={setSearchValueHandler} />

      <button type="submit">
        <figure>
          <img src={search} />
        </figure>
      </button>
    </S.StHeaderForm>
  )
}

export default HeaderSearchForm
