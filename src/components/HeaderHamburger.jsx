import React from 'react'
import '@styles/HeaderHamburger.scss'

const HeaderHamburger = () => {
  function handleClick (e) {
    document
      .querySelector('.HeaderHamburger')
      .classList.toggle('HeaderHamburger--active')
  }

  return (
    <div className="HeaderHamburger" onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}

export default HeaderHamburger
