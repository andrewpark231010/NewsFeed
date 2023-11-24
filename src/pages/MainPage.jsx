import React, { useState } from 'react'
import {
  MainPageNavigationSection,
  MainPageCardList,
} from '../components/MainPageComponents'
const MainPage = () => {
  const [select, setSelect] = useState('0')
  const [sortMode, setSortMode] = useState(0)
  const setSelectHandler = (e) => {
    setSelect(e.target.value)
  }
  return (
    <div>
      <MainPageNavigationSection
        setSelect={setSelectHandler}
        select={select}
        setSortMode={setSortMode}
        sortMode={sortMode}
      />
      <MainPageCardList
        select={select}
        sortMode={sortMode}
        setSelect={setSelect}
      />
    </div>
  )
}

export default MainPage
