import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  WPcontainerForm,
  WPtitle,
  WPtextarea,
  CompleteBtn,
} from './WritePageComponents.styled'
import WritePageCategory from './WritePageCategory'
import { useSelector } from 'react-redux'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, pathReference } from '../../API/Firebase/Firebase'
import { doc, setDoc } from 'firebase/firestore'

const WritePageSubmit = () => {
  // 상태 변수들
  const [category, setCategory] = useState('lol')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // const [cards, setCards] = useState([])
  const [image, setImage] = useState('')
  const currentUser = useSelector((state) => state.user.currentUserInfo)
  useEffect(() => {
    console.log(image)
  }, [image])

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
      window.alert('제목과 내용을 모두 입력해주세요.')
      return
    }

    const userImageRouteRef = ref(pathReference, `userImage/${image[0].name}`)

    const uploadNewPostHandler = async () => {
      await uploadBytes(userImageRouteRef, image[0])
      const url = await getDownloadURL(userImageRouteRef)

      const postId = uuidv4()
      const newPost = {
        category,
        content,
        id: postId,
        imgsrc: url,
        title,
        user: currentUser.displayName,
        userProfile: currentUser.photoURL,
        uid: currentUser.uid,
        date: new Date(),
      }
      await setDoc(doc(db, 'post', postId), newPost)
    }
    uploadNewPostHandler()
    // 입력 폼 초기화
    setTitle('')
    setContent('')
  }

  return (
    <WPcontainerForm onSubmit={onSubmitHandler}>
      <WritePageCategory
        setCategory={setCategory}
        category={category}
        setImage={setImage}
        image={image}
      />

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
