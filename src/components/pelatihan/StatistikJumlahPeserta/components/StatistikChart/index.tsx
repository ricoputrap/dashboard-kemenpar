import React from 'react'
import useData from './useData'
import ChartLine from "../../../../../assets/lines/chart-line.svg"
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import DonutChart from '../../../../reusables/organisms/DonutChart'

const StatistikChart: React.FC = () => {
  const { chartPesertaAB, chartPesertaC } = useData();

  return (
    <Stack rowGap="14px">
      <Image
        src={ ChartLine }
        width="100%"
      />

      <Flex>
        <Box borderRight="1px solid #EAC170">
          <DonutChart
            chartData={[chartPesertaAB.menData, chartPesertaAB.womenData]}
            title="Peserta Pelatihan A&B"
            width={108}
            fontSize={20}
            thickness={40}

            showLegend
            legendTitle="Jenis Kelamin"
          />
        </Box>

        <DonutChart
          chartData={[chartPesertaC.menData, chartPesertaC.womenData]}
          title="Peserta Pelatihan C"
          width={108}
          fontSize={20}
          thickness={40}

          showLegend
          legendTitle="Jenis Kelamin"
        />
      </Flex>
    </Stack>
  )
}

export default StatistikChart