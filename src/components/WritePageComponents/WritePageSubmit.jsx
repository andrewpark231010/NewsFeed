import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  WPcontainerForm,
  WPtitle,
  WPtextarea,
  CompleteBtn,
} from './WritePageComponents.styled'
import WritePageCategory from './WritePageCategory'
import { MyProfileUploadImg } from '../../styles/images'

const WritePageSubmit = () => {
  // 상태 변수들
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [cards, setCards] = useState([])

  // 카테고리 선택 핸들러
  const categoryChangeHandler = (selectedCategory) => {
    setCategory(selectedCategory)
  }

  // 제목 입력 핸들러
  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  // 내용 입력 핸들러
  const contentChangeHandler = (e) => {
    setContent(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!title || !content) {
      window.alert('제목과 내용 그리고 카테고리를 모두 입력해주세요.')
      return
    }

    // 새로운 카드 객체 생성
    const newCard = {
      id: uuidv4(),
      title,
      content,
      writefor: category,
      createdAt: new Date(),
    }

    // 기존 카드 목록에 새로운 카드 추가
    setCards((prevCards) => [...prevCards, newCard])

    // 입력 폼 초기화
    setTitle('')
    setContent('')
    alert('작성이 완료되었습니다.')
    console.log('저장된 카드 목록:', cards)
  }

  return (
    <WPcontainerForm onSubmit={onSubmitHandler}>
      <WritePageCategory />

      <WPtitle
        placeholder="제목"
        type="text"
        value={title}
        onChange={titleChangeHandler}
      />

      <WPtextarea
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={contentChangeHandler}
      />

      <CompleteBtn type="submit">작성완료</CompleteBtn>
    </WPcontainerForm>
  )
}

export default WritePageSubmit
