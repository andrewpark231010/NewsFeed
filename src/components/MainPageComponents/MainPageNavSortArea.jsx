import React from 'react'
import * as S from './MainPageComponents.styled'

const SORT_CASE = ['최신순', '오래된순']

const MainPageNavSortArea = ({ setSortMode, sortMode }) => {
  return (
    <div>
      {SORT_CASE.map((sort, index) => (
        <S.MainNavSortItem
          key={index}
          onClick={() => setSortMode(index)}
          value={index}
          $isSelected={sortMode}
        >
          {sort}
        </S.MainNavSortItem>
      ))}
    </div>
  )
}

export default MainPageNavSortArea
