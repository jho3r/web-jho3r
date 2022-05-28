import React from 'react'
import Header from '@components/Header'
import Skills from '@containers/Skills'
import RecentWork from '@containers/RecentWork'

const Home = () => {
  return (
  <React.Fragment>
    <Header/>
    <Skills />
    <RecentWork />
  </React.Fragment>
  )
}

export default Home
