import React from 'react'
import { Link } from 'react-router-dom'

import CardGrid from '@components/RecentWork/CardGrid'
import CompaniesGrid from '@components/RecentWork/CompaniesGrid'

import '@styles/RecentWork/RecentWork.scss'

const RecentWork = () => {
  return (
    <section className="RecentWork">
      <h2>Recent Work</h2>
      <p>
        Here are some of my recent projects. If you&apos;d like to see more,
        check out my&nbsp;
        <b>
          <Link to={'/portfolio'}>portfolio</Link>
        </b>
      </p>
      <CardGrid />
      <hr />
      <h2>Companies</h2>
      <p>
        I&apos;m proud to have worked with some awesome companies. Here are some
        of them.
      </p>
      <CompaniesGrid />
    </section>
  )
}

export default RecentWork
