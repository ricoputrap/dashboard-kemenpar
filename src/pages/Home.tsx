import React from 'react'
import BasePage from '../components/templates/BasePage'
import LineChart from "../components/organisms/LineChart"
import { Box, Flex } from '@chakra-ui/react'
import dummyInputData from '../components/organisms/LineChart/dummyInputData'
import HorizontalBarChart from '../components/organisms/HorizontalBarChart'
import dummyHorizontalBarData from '../components/organisms/HorizontalBarChart/dummyHorizontalBarData'

const Home: React.FC = () => {
  return (
    <BasePage id="page-home">
      <Flex paddingX="20px" columnGap="40px" paddingBottom="100px">
        <Box marginTop="80px">
          <Flex direction="column" rowGap="100px">
            <LineChart
              title="GRAFIK PENILAIAN PELATIHAN"
              data={ dummyInputData }
              height={200}
              width={950}
              legendPosition="top"
            />
            <LineChart
              title="GRAFIK PENILAIAN PELATIHAN"
              data={ dummyInputData }
              height={200}
              width={820}
              legendPosition="right"
            />
          </Flex>
        </Box>
        <Box marginTop={100}>
          <HorizontalBarChart
            title="TOP LIST"
            dataInput={ dummyHorizontalBarData }
          />
        </Box>
      </Flex>
    </BasePage>
  )
}

export default Home