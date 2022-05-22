import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/HeaderButtons.scss'
import HeaderHamburger from './HeaderHamburger'

const listButtons = [
  {
    name: 'Portafolio',
    path: '/portfolio'
  },
  //   {
  //     name: 'Blog',
  //     path: '/blog'
  //   },
  //   {
  //     name: 'Cursos',
  //     path: '/cursos'
  //   },
  {
    name: 'Contacto',
    path: '/contact'
  }
]

const HeaderButtons = () => {
  return (
    <React.Fragment>
      <ul className="HeaderButtons">
        {listButtons.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
      <HeaderHamburger />
    </React.Fragment>
  )
}

export default HeaderButtons
