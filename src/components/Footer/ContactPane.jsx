import React from 'react'
import Button from '@components/Button'
import '@styles/Footer/ContactPane.scss'

const ContactPane = () => {
  return (
        <div className='ContactPane'>
            <h2>Contact me</h2>
            <p> I&apos;d love to hear from you! Feel free to reach out to me via any of the following methods</p>
            <Button dark={true} link='mailto:jhoer.perez@gmail.com'>
                Email me
            </Button>
        </div>
  )
}

export default ContactPane
