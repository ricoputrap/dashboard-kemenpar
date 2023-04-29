import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import StackedBarChart from '../../../../reusables/organisms/StackedBarChart';
import ButtonSelengkapnya from '../../ButtonSelengkapnya';
import ColorLegend from './ColorLegend';
import { COLORS } from './constants';
import useData from './useData'

const URL = "https://drive.google.com/file/d/1CrwkQsmgWaxr1_oOaF81Ru8OjwzSqM2h/view?usp=sharing";

const ChartInfluencerVisit: React.FC = () => {
  const { labels, datasets } = useData();
  return (
    <Box id="chart-influencer-visit">
      <StackedBarChart
        title={(
          <>
            JUMLAH PEMBERITAAN<br/>
            6 DESTINASI PARIWISATA PRIORITAS
          </>
        )}
        labels={ labels }
        datasets={ datasets }
        width="630px"
        height="250px"
      />

      <Flex justifyContent="space-between" alignItems="center">
        <ButtonSelengkapnya url={ URL } />

        <ColorLegend
          categories={["FOLLOWER", "REACH", "ENGAGEMENT"]}
          colors={ COLORS }
        />
      </Flex>
    </Box>
  )
}

export default ChartInfluencerVisit