import React from 'react'
import { CATEGORY_LIST } from '../../commonData'
import * as S from './WritePageComponents.styled'
import { ReactComponent as MyProfileUploadImg } from '../../styles/images/WritePageImage/MyProfileUploadImg.svg'

const WritePageCategory = ({
  setCategory,
  category,
  image,
  setImage,
  useCustomImg,
  setUseCustomImg,
}) => {
  const changeCategoryHandler = (e) => {
    setCategory(e.target.value)
  }
  const changeImageHandler = (e) => {
    setImage(e.target.files)
  }
  const localImageUseHandler = (e) => {
    setUseCustomImg(e.target.checked)
    if (e.target.checked) setImage([])
  }
  return (
    <S.WPCategoryDiv>
      <S.WPCustomImgUseCheckBox>
        <input
          type="checkbox"
          id="customImgCheckBox"
          checked={useCustomImg}
          onChange={localImageUseHandler}
        />
        <label htmlFor="customImgCheckBox">기본이미지 사용하기</label>
      </S.WPCustomImgUseCheckBox>

      {!useCustomImg && (
        <S.WPCategoryFileInput>
          <label htmlFor="uploadFile">
            <MyProfileUploadImg />
          </label>
          <span>
            {image.length !== 0 ? image[0].name : '파일을 선택하세요'}
          </span>
          <input
            id="uploadFile"
            type="file"
            onChange={changeImageHandler}
            files={image}
            accept="image/gif,image/jpeg,image/png"
          />
        </S.WPCategoryFileInput>
      )}

      <select onChange={changeCategoryHandler} value={category}>
        {CATEGORY_LIST.map((list) => (
          <option key={list.id} value={list.id}>
            {list.text}
          </option>
        ))}
      </select>
    </S.WPCategoryDiv>
  )
}

export default WritePageCategory
