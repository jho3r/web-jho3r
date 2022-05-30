import React from 'react'
import PropTypes from 'prop-types'
import Button from '@components/Button'
import '@styles/RecentWork/Card.scss'

const colors = ['#1A374D', '#B56847', '#406882', '#415666', '#97992C', '#8486B3']

const Card = (props) => {
  const { description, image, link, background } = props
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className="Card">
      <div className="Card__image" style={{ backgroundColor: `${background || randomColor}` }}>
        <img src={image} alt="placeholder" />
      </div>
      <div className="Card__content">
        <p className="Card__description">
          {description}
        </p>
        <Button dark={false} link={link}>
            View Project
        </Button>
      </div>
    </div>
  )
}

Card.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  background: PropTypes.string
}

export default Card
