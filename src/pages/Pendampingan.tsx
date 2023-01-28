import React from 'react'
import BasePage from '../components/templates/BasePage'
import { Box, Flex } from '@chakra-ui/react';
import useInitDataStatistik from '../components/pendampingan/hooks/useInitDataStatistik';
import StatistikTotal from '../components/pendampingan/components/StatistikTotal';

const Pendampingan: React.FC = () => {
  const {
    isStatistikError,
    isStatistikLoading
  } = useInitDataStatistik();

  return (
    <BasePage id="page-pendampingan">
      <Flex direction="column">
        <Flex justifyContent="space-between" columnGap="72px">
          {/* gauge */}
          <Box width="312px">
            <StatistikTotal />
          </Box>

          {/* kpi */}
          <Box>

          </Box>
        </Flex>

        <Box>

        </Box>
      </Flex>
    </BasePage>
  )
}

export default Pendampingan;