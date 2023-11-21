import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage, MyPage, WritePage } from '../pages'
import GlobalStyle from '../styles/GlobalStyle'
import { GlobalFont } from '../styles/fonts'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme['light']}>
        <GlobalStyle />
        <GlobalFont />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default router
