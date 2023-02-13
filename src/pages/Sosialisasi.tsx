import React, { useMemo } from 'react'
import BasePage from '../components/templates/BasePage'
import { Box, Flex } from '@chakra-ui/react'
import useWindowSize from '../hooks/useWindowSize'
import useInitData from '../components/sosialisasi/hooks/useInitData'
import Statistik from '../components/sosialisasi/components/Statistik'
import StatistikTotal from '../components/sosialisasi/components/StatistikTotal'
import GrafikKategoriUsaha from '../components/sosialisasi/components/GrafikKategoriUsaha'
import GrafikNilai from '../components/sosialisasi/components/GrafikNilai'
import GrafikUsiaPendidikan from '../components/sosialisasi/components/GrafikUsiaPendidikan'
import FilterTahun from '../components/sosialisasi/components/FilterTahun'
import LoginForm from '../components/login'
import withAuth from '../hoc/withAuth'


const Sosialisasi: React.FC = () => {
  const { error, isLoading } = useInitData();
  const { width } = useWindowSize();

  const barChartsWidth: number = useMemo(() => {
    if (width == 0) {
      const WIDTH = 848;
      return WIDTH;
    }

    const DOUGHNUT_KPI_WIDTH = 390;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const GAP = 90;
    const deductedWidth = DOUGHNUT_KPI_WIDTH + PAGE_PADDING_HORIZONTAL + GAP;
    const remainingSpace = width - deductedWidth;

    return remainingSpace;
  }, [width]);

  return (
    <BasePage id="page-sosialisasi">
      <Flex direction="row" justifyContent="space-between">
        {/* STATISTIK DATA */}
        <Flex
          direction="column"
          width="390px"
          rowGap="24px"
          marginTop="20px"
        >
          <StatistikTotal />
          <Statistik />
        </Flex>

        {/* BAR CHARTS */}
        <Flex
          direction="column"
          rowGap="12px"
          width={`${barChartsWidth}px`}
          marginTop="20px"
        >
          <FilterTahun />
          <Flex direction="column" rowGap="40px">
            <GrafikKategoriUsaha width={ barChartsWidth } />
            <GrafikNilai width={ barChartsWidth } />
            <GrafikUsiaPendidikan />
          </Flex>
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default withAuth(Sosialisasi);