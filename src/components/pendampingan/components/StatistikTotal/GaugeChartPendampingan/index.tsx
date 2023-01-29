import { Box } from '@chakra-ui/react'
import React from 'react'
import useData from './useData'
import GaugeChart from '../../../../organisms/GaugeChart';

const GaugeChartPendampingan: React.FC = () => {
  const { percent, data, legendItems } = useData();

  return (
    <Box width="160px">
      <GaugeChart
        data={ data }
        title="JUMLAH PENDAMPINGAN"
        percent={ percent }
        legend={ legendItems }
      />
    </Box>
  )
}

export default GaugeChartPendampingan