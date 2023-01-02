import React from 'react'
import BasePage from '../components/templates/BasePage'
import LineChart from "../components/organisms/LineChart"
import { Box, Flex } from '@chakra-ui/react'
import HorizontalBarChart from '../components/organisms/HorizontalBarChart'
import useDataHome from '../hooks/useDataHome'
import DonutChartJumlah from '../components/organisms/DonutChartJumlah'

const Home: React.FC = () => {
  const {
    penilaianPelatihan,
    jumlahKegiatan,
    topList
  } = useDataHome();

  return (
    <BasePage id="page-home">
      <Flex paddingX="20px" columnGap="40px" paddingBottom="100px">
        <Box marginTop="40px">
          <Flex direction="column" rowGap="100px">
            <LineChart
              title="GRAFIK PENILAIAN PELATIHAN"
              data={ penilaianPelatihan }
              height={200}
              width={950}
              legendPosition="top"
            />
            <LineChart
              title="GRAFIK JUMLAH KEGIATAN"
              data={ jumlahKegiatan }
              height={200}
              width={820}
              legendPosition="right"
              filtering
            />
          </Flex>
        </Box>

        <Flex marginTop="40px" direction="column" rowGap="20px">
          <DonutChartJumlah title="JUMLAH" />

          <HorizontalBarChart
            title="TOP LIST"
            dataInput={ topList }
          />
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default Home