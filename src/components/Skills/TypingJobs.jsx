import React, { useState, useEffect } from 'react'
import '@styles/Skills/TypingJobs.scss'

const jobs = ['Frontend', 'Backend', 'Fullstack', 'Mobile', 'Blockchain']
let direction = 1
let jobIndex = -1
let currentJobIndex = -1

const TypingJobs = () => {
  const [letters, setLetters] = useState('')

  useEffect(() => {
    setTimeout(() => {
      handleChange()
    }, 200)
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
    <div className="TypingJobs">
      <p className="typingjobs-typedemo">{letters}</p>
      <p>&nbsp;Developer</p>
    </div>
  )
}

export default TypingJobs
