import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage, MyPage, WritePage } from '../pages'
import { PageWrapper } from '../styles/common.styled'
import Layout from '../components/Layout/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/write/:writeMode" element={<WritePage />} />
          </Routes>
        </PageWrapper>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
