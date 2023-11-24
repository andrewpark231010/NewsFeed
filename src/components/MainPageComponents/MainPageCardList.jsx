import React, { useEffect } from 'react'
import CardComponents from '../CommonComponents/CardComponents/CardComponents'
import * as S from './MainPageComponents.styled'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../API/Firebase/Firebase'
import { setPostData } from '../../redux/modules/postData'
import { useDispatch, useSelector } from 'react-redux'

const MainPageCardList = () => {
  const dispatch = useDispatch()
  const dataList = useSelector((state) => state.postData.postData)

  const getPostData = async () => {
    const q = query(collection(db, 'post'), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    let postData = []
    querySnapshot.forEach((item) => postData.push(item.data()))

    dispatch(setPostData(postData))
  }

  useEffect(() => {
    getPostData()
  }, [])

  return (
    <S.MainCardListUl>
      {dataList.map((item) => (
        <CardComponents key={item.id} data={item} />
      ))}
    </S.MainCardListUl>
  )
}

export default MainPageCardList
