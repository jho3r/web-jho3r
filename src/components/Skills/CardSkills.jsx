import React from 'react'
import PropTypes from 'prop-types'
import '@styles/Skills/CardSkills.scss'

const CardJobs = ({ children }) => {
  return (
    <div className='CardSkills'>
        {children}
    </div>
  )
}

CardJobs.propTypes = {
  children: PropTypes.node
}

export default CardJobs
