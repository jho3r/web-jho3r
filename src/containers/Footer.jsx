import React from 'react'
import ContactPane from '@components/Footer/ContactPane'
import SocialContainer from '@components/Footer/SocialContainer'
import SloganContainer from '@components/Footer/SloganContainer'

import '@styles/Footer/Footer.scss'

const Footer = () => {
  return (
    <section className="Footer">
      <ContactPane />
      <div className="SloganAndSocial">
        <SocialContainer />
        <SloganContainer />
      </div>
      <p className="rights">Copyright © {new Date().getFullYear()} Jho3r</p>
    </section>
  )
}

export default Footer
