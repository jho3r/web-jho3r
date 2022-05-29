import React from 'react'
import companies from '@data/companies'
import constants from '@data/constants'

import '@styles/RecentWork/CompaniesGrid.scss'

const width = window.innerWidth
if (width <= constants.maxWidth) {
  companies.length = 3
  console.log(width)
}

const CompaniesGrid = () => {
  return (
    <div className="CompaniesGrid">
      {companies.map((company, index) => {
        return (
            <img src={company.image} alt={company.name} key={index}/>
        )
      })}
    </div>
  )
}

export default CompaniesGrid
