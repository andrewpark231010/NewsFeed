import React from 'react'
import { ReactComponent as Search } from '../../../styles/images/HeaderImage/search.svg'
import { ReactComponent as Delete } from '../../../styles/images/HeaderImage/delete.svg'
import * as S from './Header.styled'
import { setSearchValue } from '../../../redux/modules/postData'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HeaderSearchForm = ({ setMenuToggled, menuToggled }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputValue = useSelector((state) => state.postData.searchValue)
  const setSearchValueHandler = (e) => {
    dispatch(setSearchValue(e.target.value))
  }
  const searchSubmitHandler = (e) => {
    if (menuToggled) setMenuToggled(false)
    navigate('/')
    e.preventDefault()
  }
  const deleteValue = () => {
    dispatch(setSearchValue(''))
  }

  return (
    <S.StHeaderForm onSubmit={searchSubmitHandler}>
      <span>검색</span>
      <input value={inputValue} onChange={setSearchValueHandler} />
      {inputValue && (
        <button type="button" onClick={deleteValue}>
          <Delete />
        </button>
      )}
      <button type="submit">
        <Search />
      </button>
    </S.StHeaderForm>
  )
}

export default HeaderSearchForm
