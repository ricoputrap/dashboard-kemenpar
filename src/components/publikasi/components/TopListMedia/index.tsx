import React from 'react'
import CircularChart, { TCircularRowData } from '../../../reusables/organisms/CircularChart'
import { Image, Stack, Text } from '@chakra-ui/react'
import ChartLine from "../../../../assets/lines/chart-line.svg"

const topListMedia: TCircularRowData[] = [
  { name: "Merdeka.com", value: 4.5 },
  { name: "Jpnn.com", value: 3 },
  { name: "Kumparan.com", value: 2.9 },
  { name: "tempo.co", value: 2.5 },
  { name: "gudeg.net", value: 2 }
]

const TopListMedia: React.FC = () => {
  return (
    <Stack id="top-list-media" rowGap="4px" width="100%">
      <Image src={ ChartLine } />
      <Text fontSize="20px" fontWeight={500}>
        TOP LIST MEDIA
      </Text>

      <CircularChart
        data={ topListMedia }
        labelSize="10px"
        labelWidth="80px"
      />
    </Stack>
  )
}

export default TopListMedia