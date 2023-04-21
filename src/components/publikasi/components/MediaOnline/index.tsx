import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import NumberedList from '../NumberedList'

const MediaOnline: React.FC = () => {
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

      <NumberedList data={[
        { label: "siaran pers", value: 30 },
        { label: "weekly press briefing", value: 1 },
        { label: "media center", value: 2 },
        { label: "pemberitaan media online", value: 442 }
      ]} />
    </Box>
  )
}

export default MediaOnline