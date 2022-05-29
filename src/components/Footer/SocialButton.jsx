import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@styles/Footer/SocialButton.scss'

const SocialButton = (props) => {
  const { name, url } = props
  return (
        <div className='SocialButton'>
            <a href={url} target="_blank" rel="noreferrer"></a>
            <i className={`bi-${name} `}></i>
        </div>
  )
}

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default SocialButton
