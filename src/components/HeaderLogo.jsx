import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/HeaderLogo.scss'

import logo from '@assets/logo.svg'
import logoHover from '@assets/logo-hover.svg'

const HeaderLogo = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <div className="HeaderLogo">
          <img src={logoHover} alt="Logo" />
          <img src={logo} alt="Logo" />
        </div>
      </Link>
    </React.Fragment>
  )
}

export default HeaderLogo
