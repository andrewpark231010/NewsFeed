import React from 'react'

import { WPCategoryDiv } from './WritePageComponents.styled'

const WritePageCategory = ({ setCategory, category, image, setImage }) => {
  const changeCategoryHandler = (e) => {
    setCategory(e.target.value)
  }
  const changeImageHandler = (e) => {
    setImage(e.target.files)
  }

  return (
    <WPCategoryDiv>
      <label htmlFor="uploadFile"></label>
      <input
        id="uploadFile"
        type="file"
        onChange={changeImageHandler}
        files={image}
      />
      <select onChange={changeCategoryHandler} value={category}>
        <option value="lol">리그오브레전드</option>
        <option value="Maple">메이플스토리</option>
        <option value="val">발로란트</option>
      </select>
    </WPCategoryDiv>
  )
}

export default WritePageCategory
