import React from 'react'
import NavbarButtons from './NavbarButtons'
import NavbarLogo from './NavbarLogo'
import '@styles/Navbar/Navbar.scss'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <NavbarLogo />
      <NavbarButtons />
    </nav>
  )
}

export default Navbar
