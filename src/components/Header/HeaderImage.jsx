import React from 'react'
import '@styles/Header/HeaderImage.scss'

import avatar from '@assets/avatar.png'

const HeaderImage = () => {
  return (
        <div className='HeaderImage'>
            <img src={avatar} alt="Header Image" />
        </div>
  )
}

export default HeaderImage
