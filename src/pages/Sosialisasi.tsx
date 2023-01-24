import React, { useMemo } from 'react'
import BasePage from '../components/templates/BasePage'
import { Flex, Text } from '@chakra-ui/react'
import GroupedKPIPeserta from '../components/GroupedKPIPeserta'
import useDataSosialisasi from '../hooks/useDataSosialisasi'
import DoughnutChartPeserta from '../components/organisms/DoughnutChartPeserta'
import BarChart from '../components/organisms/BarChart'
import useWindowSize from '../hooks/useWindowSize'
import { TBarData } from '../components/organisms/BarChart/index.types'

let labels = ['pemandu wisata', 'home stay', 'cendra mata', 'kuliner', 'pengelola wisata', 'jasa transportasi', 'pelaku budaya'];
labels = labels.map(item => item.toUpperCase());

const dataset: TBarData[] = [
  {
    label: "Jumlah Usaha",
    data: [1500, 1900, 2500, 1000, 800, 1300, 2000],
    backgroundColor: "#FF3D00"
  }
]


const Sosialisasi: React.FC = () => {
  const { kpi, chartData, isLoading, error } = useDataSosialisasi();
  const { width } = useWindowSize();

  const barChartsWidth: string = useMemo(() => {
    const DOUGHNUT_KPI_WIDTH = 390;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const GAP = 90;
    const deductedWidth = DOUGHNUT_KPI_WIDTH + PAGE_PADDING_HORIZONTAL + GAP;
    const remainingSpace = width - deductedWidth;
    
    return `${remainingSpace}px`;
  }, [width]);

  if (chartData.length == 0 || isLoading) return (
    <BasePage id="page-sosialisasi">
      <Text textAlign="center">LOADING...</Text>
    </BasePage>
  )

  return (
    <BasePage id="page-sosialisasi">
      <Flex direction="row" justifyContent="space-between">
        {/* Doughnut Chart & KPI Peserta */}
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

        {/* Bar Charts */}
        <Flex direction="column" columnGap="40px" width={ barChartsWidth }>
          <BarChart
            title="Grafik Kategori Usaha"
            width={ barChartsWidth }
            height="150px"
            labels={ labels }
            dataset={ dataset }
          />
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default Sosialisasi