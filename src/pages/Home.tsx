import React from 'react'
import BasePage from '../components/templates/BasePage'
import LineChart from "../components/organisms/LineChart"
import { Box, Flex } from '@chakra-ui/react'
import dummyInputData from '../components/organisms/LineChart/dummyInputData'
import HorizontalBarChart from '../components/organisms/HorizontalBarChart'

const Home: React.FC = () => {
  return (
    <BasePage id="page-home">
      <Flex paddingX="20px" columnGap="40px">
        <Box marginTop={100}>
          <Flex direction="column" rowGap="135px">
            <LineChart
              title="GRAFIK PENILAIAN PELATIHAN"
              data={ dummyInputData }
              height={200}
              width={1000}
              legendPosition="top"
            />
            <LineChart
              title="GRAFIK PENILAIAN PELATIHAN"
              data={ dummyInputData }
              height={200}
              width={1000}
              legendPosition="right"
            />
          </Flex>
        </Box>
        <Box marginTop={100}>
          <HorizontalBarChart />
        </Box>
      </Flex>
    </BasePage>
  )
}

export default Home