import React from 'react'
import BasePage from '../templates/BasePage'
import { Box, Circle, Flex, Image, Stack, Text } from '@chakra-ui/react'
import ChartLine from "../../assets/lines/chart-line.svg"
import Ring from './components/Ring'
import MediaLuarRuang from './components/MediaLuarRuang'
import Website from './components/Website'
import MediaElektronik from './components/MediaElektronik'
import MediaSosial from './components/MediaSosial'

type TDoughnutChartItem = {
  value: number;
  percent: number;
  label: string;
  color: string;
}

const PublikasiView: React.FC = () => {
  return (
    <BasePage id="page-sosialisasi">
      <Flex justifyContent="space-between">

        {/* Column I */}
        <Stack rowGap="24px" width="392px">
          <MediaLuarRuang />
          <Website />
          <MediaElektronik />
        </Stack>

        {/* Column II */}
        <Stack rowGap="24px" width="392px">
          <MediaSosial />
          <Box width="100%">
            <Image src={ ChartLine } width="100%" />
          </Box>
        </Stack>

        {/* Column III */}
        <Stack rowGap="24px" width="392px">
          <Box width="100%">
            <Image src={ ChartLine } width="100%" />
          </Box>
          <Box width="100%">
            <Image src={ ChartLine } width="100%" />
          </Box>
        </Stack>
      </Flex>
    </BasePage>
  )
}

export default PublikasiView