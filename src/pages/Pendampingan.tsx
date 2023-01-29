import React, { useMemo } from 'react'
import BasePage from '../components/templates/BasePage'
import { Box, Flex } from '@chakra-ui/react';
import useInitDataStatistik from '../components/pendampingan/hooks/useInitDataStatistik';
import StatistikTotal from '../components/pendampingan/components/StatistikTotal';
import Statistik from '../components/pendampingan/components/Statistik';
import useWindowSize from '../hooks/useWindowSize';
import { PADDING } from '../constants';
import Laporan from '../components/pendampingan/components/Laporan';

const Pendampingan: React.FC = () => {
  const {
    isStatistikError,
    isStatistikLoading
  } = useInitDataStatistik();

  const { width } = useWindowSize();

  const statistikWidth = useMemo(() => {
    const statistikTotalWidth = 312;
    const totalPadding = PADDING * 2;
    const gap = 72;
    const result = width - statistikTotalWidth - totalPadding - gap;
    return result;
  }, [width]);

  return (
    <BasePage id="page-pendampingan">
      <Flex direction="column" rowGap="24px">
        <Flex justifyContent="space-between" columnGap="72px">
          {/* gauge */}
          <Box width="312px">
            <StatistikTotal />
          </Box>

          {/* statistik */}
          <Box width={`${statistikWidth}px`}>
            <Statistik />
          </Box>
        </Flex>

        <Box>
          <Laporan />
        </Box>
      </Flex>
    </BasePage>
  )
}

export default Pendampingan;