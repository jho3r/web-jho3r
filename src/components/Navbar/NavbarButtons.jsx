import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/Navbar/NavbarButtons.scss'
import NavbarHamburger from './NavbarHamburger'

const listButtons = [
  {
    name: 'Portfolio',
    path: '/portfolio'
  },
  //   {
  //     name: 'Blog',
  //     path: '/blog'
  //   },
  //   {
  //     name: 'Courses',
  //     path: '/courses'
  //   },
  {
    name: 'Contact',
    path: '/contact'
  }
]

const NavbarButtons = () => {
  return (
    <React.Fragment>
      <ul className="NavbarButtons">
        {listButtons.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
      <NavbarHamburger />
    </React.Fragment>
  )
}

export default NavbarButtons
