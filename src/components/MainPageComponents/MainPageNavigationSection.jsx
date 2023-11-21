import React from 'react'
import * as S from './MainPageComponents.styled'
import MainPageNavSortArea from './MainPageNavSortArea'

const MainPageNavigationSection = () => {
  return (
    <S.MainNavSectionDiv>
      <select>
        <option>카테고리</option>
      </select>
      <MainPageNavSortArea />
    </S.MainNavSectionDiv>
  )
}

export default MainPageNavigationSection
