import React from 'react'
import * as S from '../MainPageComponents/MainPageComponents.styled'
import { WPCategoryDiv } from './WritePageComponents.styled'

const WritePageCategory = () => {
  return (
    <WPCategoryDiv>
      <label htmlFor="uploadFile"></label>
      <input id="uploadFile" type="file" />
      <select>
        <option>카테고리</option>
      </select>
    </WPCategoryDiv>
  )
}

export default WritePageCategory
