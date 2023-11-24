import React from 'react'
import * as S from './MainPageComponents.styled'
import MainPageNavSortArea from './MainPageNavSortArea'
import { CATEGORY_LIST } from '../../commonData'

const MainPageNavigationSection = ({
  setSelect,
  select,
  setSortMode,
  sortMode,
}) => {
  return (
    <S.MainNavSectionDiv>
      <select value={select} onChange={setSelect}>
        <option value={0}>전체 게임</option>
        {CATEGORY_LIST.map((list) => (
          <option key={list.id} value={list.id}>
            {list.text}
          </option>
        ))}
      </select>
      <MainPageNavSortArea setSortMode={setSortMode} sortMode={sortMode} />
    </S.MainNavSectionDiv>
  )
}

export default MainPageNavigationSection
