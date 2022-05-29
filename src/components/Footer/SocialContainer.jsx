import React from 'react'
import SocialButton from './SocialButton'
import social from '@data/social'

import '@styles/Footer/SocialContainer.scss'

const SocialContainer = () => {
  return (
        <div className='SocialContainer'>
            {social.map(({ name, url }) => (
                <SocialButton key={name} name={name} url={url} />
            ))}
        </div>
  )
}

export default SocialContainer
