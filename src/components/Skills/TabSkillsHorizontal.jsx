import React from 'react'
import HorizontalTabs from '@components/Tabs/HorizontalTabs'
import SkillDescription from './SkillDescription'
import data from '@data/skills'

const TabSkillsVertical = () => {
  return (
    <HorizontalTabs data={data} Component={SkillDescription} />
  )
}

export default TabSkillsVertical
