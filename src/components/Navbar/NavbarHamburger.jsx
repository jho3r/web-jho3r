import React from 'react'
import '@styles/Navbar/NavbarHamburger.scss'

const NavbarHamburger = () => {
  function handleClick (e) {
    document
      .querySelector('.NavbarHamburger')
      .classList.toggle('NavbarHamburger--active')
  }

  return (
    <div className="NavbarHamburger" onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}

export default NavbarHamburger
