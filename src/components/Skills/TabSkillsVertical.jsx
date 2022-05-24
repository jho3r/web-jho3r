import React from 'react'
import VerticalTabs from '@components/Tabs/VerticalTabs'
import SkillDescription from './SkillDescription'
import data from '@data/skills'

const TabSkillsVertical = () => {
  return (
    <VerticalTabs data={data} Component={SkillDescription} />
  )
}

export default TabSkillsVertical
