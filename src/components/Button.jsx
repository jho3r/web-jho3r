import React from 'react'
import PropTypes from 'prop-types'

import '@styles/Button.scss'

const Button = (props) => {
  const { dark, link } = props
  return (
    <button className={`Button ${dark ? 'Button-dark' : 'Button-light'}`}>
      {link && <a href={link} target="_blank" rel="noreferrer"></a>}
      {props.children}
    </button>
  )
}

Button.propTypes = {
  dark: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Button
