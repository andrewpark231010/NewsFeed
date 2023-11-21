import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage, MyPage, WritePage } from '../pages'
import { GlobalFont } from '../styles/fonts'
import { ThemeProvider } from 'styled-components'
import { PageWrapper } from '../styles/common.styled'
import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

const router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme['light']}>
        <GlobalStyle />
        <GlobalFont />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/write" element={<WritePage />} />
          </Routes>
        </PageWrapper>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default router
