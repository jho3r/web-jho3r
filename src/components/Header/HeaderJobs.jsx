import React, { useState, useEffect } from 'react'
import '@styles/Header/HeaderJobs.scss'

const jobs = ['Software', 'Frontend', 'Backend', 'Fullstack', 'Mobile', 'Web']
let direction = 1
let jobIndex = -1
let currentJobIndex = -1

const HeaderJobs = () => {
  const [letters, setLetters] = useState('')

  useEffect(() => {
    setTimeout(() => {
      handleChange()
    }, 100)
  }, [letters])

  const handleChange = () => {
    if (letters === '') {
      jobIndex++
      direction = 1
      if (jobIndex === jobs.length) {
        jobIndex = 0
      }
    }
    if (letters === jobs[jobIndex]) {
      setTimeout(() => {
        console.log('change')
        currentJobIndex--
        direction = -1
        changeWord()
      }, 2000)
    }
    changeWord()
  }

  const changeWord = () => {
    currentJobIndex += direction
    setLetters(jobs[jobIndex].slice(0, currentJobIndex + 1))
  }

  return (
    <div className="HeaderJobs">
      <p className="headerjobs-typedemo">{letters}</p>
      <p className="headerjobs-typed">&nbsp;Developer</p>
    </div>
  )
}

export default HeaderJobs
