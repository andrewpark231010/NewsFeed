import React from 'react'
import CardComponents from '../CommonComponents/CardComponents/CardComponents'
import * as S from './MainPageComponents.styled'
import { useSelector } from 'react-redux'

const MainPageCardList = () => {
  const dataList = useSelector((state) => state.postData.postData)
  return (
    <S.MainCardListUl>
      {dataList.map((item) => (
        <CardComponents key={item.id} data={item} />
      ))}
    </S.MainCardListUl>
  )
}

export default MainPageCardList
