import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage, MyPage, WritePage } from '../pages'
import { GlobalFont } from '../styles/fonts'
import { ThemeProvider } from 'styled-components'
import { PageWrapper } from '../styles/common.styled'
import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'
import Layout from '../components/Layout/Layout'
import { useSelector } from 'react-redux'

const Router = () => {
  const currentThemeMode = useSelector((state) => state.themeMode.mode)
  return (
    <BrowserRouter>
      <GlobalFont />
      <ThemeProvider theme={theme[currentThemeMode]}>
        <GlobalStyle />
        <Layout>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/my" element={<MyPage />} />
              <Route path="/write/:writeMode" element={<WritePage />} />
            </Routes>
          </PageWrapper>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Router
