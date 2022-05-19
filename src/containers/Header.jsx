import React from 'react'
import HeaderButtons from '../components/HeaderButtons'
import HeaderLogo from '../components/HeaderLogo'
import '../styles/Header.scss'

const Header = () => {
  return (
    <nav className='Header'>
      <HeaderLogo />
      <HeaderButtons />
    </nav>
  )
}

export default Header
