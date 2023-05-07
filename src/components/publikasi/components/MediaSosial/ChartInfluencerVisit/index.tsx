import { Box, Flex } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import StackedBarChart from '../../../../reusables/organisms/StackedBarChart';
import { TChartInfluencerVisit } from '../../../state/index.types';
import ButtonSelengkapnya from '../../ButtonSelengkapnya';
import ColorLegend from './ColorLegend';

interface Props {
  data: TChartInfluencerVisit;
}

const ChartInfluencerVisit: React.FC<Props> = ({ data }) => {
  const { categories, colors } = useMemo(() => {
    const categories: string[] = data.datasets.map(item => item.label.toUpperCase());
    const colors: string[] = data.datasets.map(item => item.backgroundColor);
    return { categories, colors }
  }, [data]);

  return (
    <Box id="chart-influencer-visit">
      <StackedBarChart
        title={(
          <>
            INFLUENCER VIST<br/>
            6 DESTINASI PARIWISATA PRIORITAS
          </>
        )}
        labels={ data.labels }
        datasets={ data.datasets }
        width="630px"
        height="250px"
      />

      <Flex justifyContent="space-between" alignItems="center">
        <ButtonSelengkapnya url={ data.url } />

        <ColorLegend
          categories={ categories }
          colors={ colors }
        />
      </Flex>
    </Box>
  )
}

export default ChartInfluencerVisit