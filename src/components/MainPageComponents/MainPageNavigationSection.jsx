import React from 'react'
import * as S from './MainPageComponents.styled'
import MainPageNavSortArea from './MainPageNavSortArea'
import { CATEGORY_LIST } from '../../commonData'

const MainPageNavigationSection = () => {
  return (
    <S.MainNavSectionDiv>
      <select>
        <option value={0}>전체 게임</option>
        {CATEGORY_LIST.map((list) => (
          <option key={list.id} value={list.id}>
            {list.text}
          </option>
        ))}
      </select>
      <MainPageNavSortArea />
    </S.MainNavSectionDiv>
  )
}

export default MainPageNavigationSection
