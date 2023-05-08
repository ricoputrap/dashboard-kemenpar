import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import NumberedList from '../../NumberedList'
import ChartLine from "../../../../../assets/lines/chart-line.svg"
import ButtonSelengkapnya from '../../ButtonSelengkapnya'
import useData from '../useData'

const MediaElektronik: React.FC = () => {
  const { mediaElektronik } = useData();

  return (
    <Box id="media-elektronik">
      <Box marginBottom="32px">
        <Text
          color="#EAC170"
          fontSize="25px"
          fontWeight={600}
          marginBottom="12px"
        >
          MEDIA ELEKTRONIK
        </Text>
        <Image src={ ChartLine } width="312px" />
      </Box>
      <NumberedList
        data={ mediaElektronik.data }
      />
      <Box marginTop="20px">
        <ButtonSelengkapnya
          url={ mediaElektronik.url }
          fullWidth
        />
      </Box>
    </Box>
  )
}

export default MediaElektronik