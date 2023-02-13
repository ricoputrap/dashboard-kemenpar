import React, { useMemo } from 'react'
import useInitData from './useInitData'
import BasePage from '../templates/BasePage';
import { Flex } from '@chakra-ui/react';
import StatistikJumlahPeserta from './StatistikJumlahPeserta';
import GrafikUsiaPendidikan from './GrafikUsiaPendidikan';
import useWindowSize from '../../hooks/useWindowSize';
import MateriPelatihan from './MateriPelatihan';

const PelatihanView: React.FC = () => {
  useInitData();
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
    <BasePage id="page-pelatihan">
      <Flex direction="row" justifyContent="space-between">
        <StatistikJumlahPeserta />

        <Flex
          direction="column"
          rowGap="12px"
          width={`${barChartsWidth}px`}
          marginTop="20px"
        >
          <GrafikUsiaPendidikan />
          <MateriPelatihan />
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default PelatihanView