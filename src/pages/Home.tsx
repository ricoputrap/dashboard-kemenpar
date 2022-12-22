import React from 'react'
import BasePage from '../components/templates/BasePage'
import LineChart from '../components/atoms/LineChart'
import { Box } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <BasePage id="page-home">
      <Box marginTop={200}>
        <LineChart />
      </Box>
    </BasePage>
  )
}

export default Home