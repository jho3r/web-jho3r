import React from 'react'
import '@styles/Header/HeaderImage.scss'

import profilePhoto from '@assets/profile-photo.png'

const HeaderImage = () => {
  return (
        <div className='HeaderImage'>
            <img src={profilePhoto} alt="Header Image" />
        </div>
  )
}

export default HeaderImage
