import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/Navbar/NavbarLogo.scss'

import logo from '@assets/logo.svg'
import logoHover from '@assets/logo-hover.svg'

const NavbarLogo = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <div className="NavbarLogo">
          <img src={logoHover} alt="Logo" />
          <img src={logo} alt="Logo" />
        </div>
      </Link>
    </React.Fragment>
  )
}

export default NavbarLogo
