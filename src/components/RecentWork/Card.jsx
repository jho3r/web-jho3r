import React from 'react'
import Button from '@mui/material/Button'
import '@styles/RecentWork/Card.scss'

const Card = () => {
  return (
    <div className="Card">
      <div className="Card__image" style={{ backgroundColor: 'red' }}>
        <img src="https://via.placeholder.com/300x200" alt="placeholder" />
      </div>
      <div className="Card__content">
        <p className="Card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod, nisi vel consectetur euismod, nisi lectus tincidunt nisi,
          eget consectetur nisl nisl eget lectus.
        </p>
        <Button variant="outlined" color="warning" size='small'>
          <a
            className="Card__link"
            href="https://www.google.com"
            target={'_blank'}
            rel="noreferrer"
          >
            View Project
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Card
