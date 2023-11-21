import React, { useState } from 'react'
import * as S from './MainPageComponents.styled'

const SORT_CASE = ['최신순', '오래된순']

const MainPageNavSortArea = () => {
  const [sortSelect, setSortSelect] = useState(0)
  return (
    <div>
      {SORT_CASE.map((sort, index) => (
        <S.MainNavSortItem
          key={index}
          onClick={() => setSortSelect(index)}
          value={index}
          $isSelected={sortSelect}
        >
          {sort}
        </S.MainNavSortItem>
      ))}
    </div>
  )
}

export default MainPageNavSortArea
