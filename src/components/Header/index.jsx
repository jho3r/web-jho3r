import React from 'react'
import '@styles/Header/Header.scss'
import HeaderImage from './HeaderImage'
import HeaderTitle from './HeaderTitle'

import smoke from '@assets/smoke.png'

const Header = () => {
  return (
    <header className='Header'>
      <HeaderTitle />
      <HeaderImage />
      <img className='background' src={smoke} alt="Smoke" />
    </header>
  )
}

export default Header
