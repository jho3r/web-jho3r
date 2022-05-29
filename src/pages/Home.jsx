import React from 'react'
import Header from '@components/Header'
import Skills from '@containers/Skills'
import RecentWork from '@containers/RecentWork'
import Footer from '@containers/Footer'

const Home = () => {
  return (
  <React.Fragment>
    <Header/>
    <Skills />
    <RecentWork />
    <Footer />
  </React.Fragment>
  )
}

export default Home
