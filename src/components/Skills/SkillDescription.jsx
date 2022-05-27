import React from 'react'
import PropTypes from 'prop-types'
import BarChart from '@components/Charts/BarChart'
import '@styles/Skills/SkillDescription.scss'

const SkillDescription = ({ data }) => {
  // sort by year
  data.technologies.sort((a, b) => {
    return a.year - b.year
  })
  const labels = data.technologies.map((skill) => skill.title)
  const label = 'Experience (years)'
  const currentYear = new Date().getFullYear()
  const dataSet = data.technologies.map((skill) => (currentYear - parseInt(skill.year)) || 0.5)
  const axis = 'y'
  const color = '#B56847'

  return (
    <div className='SkillDescription'>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>Main technologies and experience</h3>
      <BarChart
        labels={labels}
        label={label}
        data={dataSet}
        axis={axis}
        color={color}
      />
    </div>
  )
}

SkillDescription.propTypes = {
  data: PropTypes.object
}

export default SkillDescription
