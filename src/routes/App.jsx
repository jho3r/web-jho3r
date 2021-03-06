import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import Portfolio from '@pages/Portfolio'
import Blog from '@pages/Blog'
import Courses from '@pages/Courses'
import Contact from '@pages/Contact'
import ComingSoon from '@pages/ComingSoon'
import '@styles/global.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />
          <Route path="/courses" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
