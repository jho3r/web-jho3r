import React from 'react'
import Card from './Card'
import projects from '@data/projects'
import constants from '@data/constants'
import '@styles/RecentWork/CardGrid.scss'

const width = window.innerWidth
if (width <= constants.maxWidth) {
  projects.length = 3
} else {
  projects.length = 6
}

const CardGrid = () => {
  return (
        <div className='CardGrid'>
            {projects.map((project, index) => {
              return (
                    <Card
                        key={index}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
              )
            })}
        </div>
  )
}

export default CardGrid
