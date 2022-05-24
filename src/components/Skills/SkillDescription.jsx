import React from 'react'
import PropTypes from 'prop-types'

const SkillDescription = ({ data }) => {
  return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
  )
}

SkillDescription.propTypes = {
  data: PropTypes.object
}

export default SkillDescription
