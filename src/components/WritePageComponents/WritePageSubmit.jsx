import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as S from './WritePageComponents.styled'
import WritePageCategory from './WritePageCategory'
import { useDispatch, useSelector } from 'react-redux'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, pathReference } from '../../API/Firebase/Firebase'
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { setPostData } from '../../redux/modules/postData'
import { useNavigate, useParams } from 'react-router-dom'
import { CATEGORY_LIST } from '../../commonData'

const WritePageSubmit = () => {
  const dispatch = useDispatch()
  const writeMode = useParams().writeMode
  const isEditMode = writeMode === 'editPost'
  const currentPostData = useSelector(
    (state) => state.modalToggle.currentDetailCardData
  )

  const [useCustomImg, setUseCustomImg] = useState(
    isEditMode ? currentPostData.isDefaultImage : true
  )
  const [category, setCategory] = useState(
    isEditMode ? currentPostData.category : '1'
  )
  const [title, setTitle] = useState(isEditMode ? currentPostData.title : '')
  const [content, setContent] = useState(
    isEditMode ? currentPostData.content : ''
  )
  const [image, setImage] = useState('')

  const navigate = useNavigate()
  const textAreaRef = useRef()
  const currentUser = useSelector((state) => state.user.currentUserInfo)

  useEffect(() => {
    textAreaRef.current.style.height = 'auto'
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
  }, [content])

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  const contentChangeHandler = (e) => {
    setContent(e.target.value)
  }

  const onPostSubmitHandler = (e) => {
    e.preventDefault()
    if (!title || !content) {
      window.alert('제목과 내용을 모두 입력해주세요.')
      return
    }
    if (image.length === 0 && !useCustomImg) {
      window.alert('이미지를 선택해주세요.')
      return
    }
    const userImageRouteRef = ref(
      pathReference,
      `postImage/${
        image.length !== 0
          ? image[0].name.replace(/[()]/g, '')
          : CATEGORY_LIST[category - 1].imgName
      }`
    )
    const q = query(collection(db, 'post'), orderBy('date', 'desc'))
    const uploadNewPostHandler = async () => {
      if (image.length !== 0) await uploadBytes(userImageRouteRef, image[0])
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
        isDefaultImage: useCustomImg,
      }
      await setDoc(doc(db, 'post', postId), newPost)
      const querySnapshot = await getDocs(q)
      let postData = []
      querySnapshot.forEach((item) => postData.push(item.data()))
      dispatch(setPostData(postData))
    }

    const upDatePostHandler = async () => {
      if (image.length !== 0) await uploadBytes(userImageRouteRef, image[0])
      const url = await getDownloadURL(userImageRouteRef)
      const updatePost = {
        category,
        content,
        imgsrc: url,
        title,
        isDefaultImage: useCustomImg,
      }
      await updateDoc(doc(db, 'post', currentPostData.id), updatePost)
      const querySnapshot = await getDocs(q)
      let postData = []
      querySnapshot.forEach((item) => postData.push(item.data()))
      dispatch(setPostData(postData))
    }
    isEditMode ? upDatePostHandler() : uploadNewPostHandler()
    setTitle('')
    setContent('')
    navigate('/')
  }

  return (
    <S.WPcontainerForm onSubmit={onPostSubmitHandler}>
      <WritePageCategory
        setCategory={setCategory}
        category={category}
        setImage={setImage}
        image={image}
        useCustomImg={useCustomImg}
        setUseCustomImg={setUseCustomImg}
      />

      <S.WPtitle
        placeholder="제목"
        type="text"
        value={title}
        onChange={titleChangeHandler}
      />

      <S.WPtextarea
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={contentChangeHandler}
        ref={textAreaRef}
      />

      <S.CompleteBtn type="submit">작성완료</S.CompleteBtn>
    </S.WPcontainerForm>
  )
}

export default WritePageSubmit
