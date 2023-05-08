import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import ChartJumlahPemberitaan from '../ChartJumlahPemberitaan'
import NumberedList from '../NumberedList'
import useData from './useData'

const MediaOnline: React.FC = () => {
  const { list, jangkauanMedia } = useData();

  return (
    <Box>
      <Box marginBottom="40px">
        <Text
          color="#EAC170"
          fontSize="25px"
          fontWeight={600}
          marginBottom="12px"
        >
          MEDIA SOSIAL
        </Text>
        <Image src={ ChartLine } width="312px" />
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap="68px">
        <GridItem w="100%">
          <NumberedList data={ list } />
        </GridItem>
        <GridItem w="100%">
          <ChartJumlahPemberitaan
            dataset={ jangkauanMedia.dataset }
            labels={ jangkauanMedia.labels }
            url={ jangkauanMedia.url }
          />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default MediaOnline