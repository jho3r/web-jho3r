import React from 'react'
import '@styles/Header/Header.scss'
import HeaderImage from './HeaderImage'
import HeaderTitle from './HeaderTitle'

import smoke from '@assets/smoke.png'

const Header = () => {
  return (
    <header className="Header">
      <section className="header-top">
        <HeaderTitle />
        <HeaderImage />
        <img className="header-background" src={smoke} alt="Smoke" />
      </section>
    </header>
  )
}

export default Header
