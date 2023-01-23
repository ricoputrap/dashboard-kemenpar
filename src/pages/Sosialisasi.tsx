import React from 'react'
import BasePage from '../components/templates/BasePage'
import { Flex, Text } from '@chakra-ui/react'
import GroupedKPIPeserta from '../components/GroupedKPIPeserta'
import useDataSosialisasi from '../hooks/useDataSosialisasi'
import DoughnutChartPeserta from '../components/organisms/DoughnutChartPeserta'


const Sosialisasi: React.FC = () => {
  const { kpi, chartData, isLoading, error } = useDataSosialisasi();

  if (chartData.length == 0 || isLoading) return (
    <BasePage id="page-sosialisasi">
      <Text textAlign="center">LOADING...</Text>
    </BasePage>
  )

  return (
    <BasePage id="page-sosialisasi">
      <Flex direction="column" width="390px" rowGap="24px">
        {/* Donut Chart of Jenis Kelamin Peserta */}
        <DoughnutChartPeserta
          title="Peserta Sosialisasi"
          menData={ chartData[0] }
          womenData={ chartData[1] }
        />

        {/* KPI Jumlah Peserta per Location */}
        <GroupedKPIPeserta
          title="Jumlah Peserta Sosialisasi DPP"
          data={kpi}
        />
      </Flex>
    </BasePage>
  )
}

export default Sosialisasi