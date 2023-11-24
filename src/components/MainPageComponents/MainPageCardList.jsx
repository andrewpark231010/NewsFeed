import React from 'react'
import CardComponents from '../CommonComponents/CardComponents/CardComponents'
import * as S from './MainPageComponents.styled'
import { useSelector } from 'react-redux'

const MainPageCardList = ({ select, sortMode, setSelect }) => {
  const dataList = useSelector((state) => state.postData.postData)
  let filterDataList = []
  const inputValue = useSelector((state) => state.postData.searchValue)
  if (inputValue) {
    setSelect('0')
    filterDataList = dataList.filter(
      (data) =>
        data.title.includes(inputValue) || data.content.includes(inputValue)
    )
  } else {
    if (select === '0') {
      filterDataList = dataList
    } else {
      filterDataList = dataList.filter((data) => data.category === select)
    }
  }

  if (sortMode) {
    dataList.sort((a, b) => a['date'] - b['date'])
  } else {
    dataList.sort((a, b) => b['date'] - a['date'])
  }
  return (
    <S.MainCardListUl>
      {filterDataList.map((item) => (
        <CardComponents key={item.id} data={item} />
      ))}
    </S.MainCardListUl>
  )
}

export default MainPageCardList
