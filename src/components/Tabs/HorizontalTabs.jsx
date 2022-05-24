import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from '@components/Tabs/TabPanel'
import PropTypes from 'prop-types'

function a11yProps (index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

function HorizontalTabs ({ data, Component }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // log the screen size
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Skills"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >

        {data.map((item, index) => (
          <Tab key={index} label={item.title} {...a11yProps(index)} />
        ))}

      </Tabs>

    </Box>
    {data.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Component data={item} />
        </TabPanel>
    ))}
      </Box>
  )
}

HorizontalTabs.propTypes = {
  data: PropTypes.array,
  Component: PropTypes.func
}

export default HorizontalTabs
