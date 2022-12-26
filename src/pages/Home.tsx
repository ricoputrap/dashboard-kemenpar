import React from 'react'
import BasePage from '../components/templates/BasePage'
import LineChart from '../components/atoms/LineChart'
import { Box } from '@chakra-ui/react'
import dummyInputData from '../components/atoms/LineChart/dummyInputData'

const Home: React.FC = () => {
  return (
    <BasePage id="page-home">
      <Box marginTop={200}>
        <LineChart
          data={ dummyInputData }
          height={200}
          width={1000}
        />
      </Box>
    </BasePage>
  )
}

export default Home