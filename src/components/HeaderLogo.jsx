import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@styles/HeaderLogo.scss'

import logo from '@assets/logo.svg'
import logoHover from '@assets/logo-hover.svg'

const HeaderLogo = () => {
  const [isHover, setIsHover] = useState(false)

  const handleHover = () => {
    setIsHover(!isHover)
  }

  const activeLogo = isHover ? logoHover : logo

  return (
    <React.Fragment>
      <Link to="/">
        <div className="HeaderLogo" onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <img src={activeLogo} alt="Logo" />
        </div>
      </Link>
    </React.Fragment>
  )
}

export default HeaderLogo
