import React from 'react'
import BasePage from '../components/templates/BasePage'
import LineChart from "../components/organisms/LineChart"
import { Box } from '@chakra-ui/react'
import dummyInputData from '../components/organisms/LineChart/dummyInputData'

const Home: React.FC = () => {
  return (
    <BasePage id="page-home">
      <Box marginTop={100}>
        <LineChart
          title="GRAFIK PENILAIAN PELATIHAN"
          data={ dummyInputData }
          height={200}
          width={1000}
          legendPosition="right"
        />
      </Box>
    </BasePage>
  )
}

export default Home