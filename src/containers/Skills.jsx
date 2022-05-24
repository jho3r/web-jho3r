import React from 'react'
import TypingJobs from '@components/Skills/TypingJobs'
import TabSkillsVertical from '@components/Skills/TabSkillsVertical'
import TabSkillsHorizontal from '@components/Skills/TabSkillsHorizontal'
import CardSkills from '@components/Skills/CardSkills'
import '@styles/Skills/Skills.scss'

const Experience = () => {
  return (
    <section className='Skills'>
      <TypingJobs />
      <CardSkills>
          {window.innerWidth > 768 && <TabSkillsVertical />}
          {window.innerWidth <= 768 && <TabSkillsHorizontal />}
      </CardSkills>
    </section>
  )
}

export default Experience
