import React from 'react'
import { Link } from 'react-router-dom'

import CardGrid from '@components/RecentWork/CardGrid'

import '@styles/RecentWork/RecentWork.scss'

const RecentWork = () => {
  return (
    <section className="RecentWork">
      <h2>Recent Work</h2>
      <p>
        Here are some of my recent projects. If you&apos;d like to see more,
        check out my{' '}
        <b>
          <Link to={'/portfolio'}>portfolio</Link>
        </b>
      </p>
      <CardGrid />
    </section>
  )
}

export default RecentWork
