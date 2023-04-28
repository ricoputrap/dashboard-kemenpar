import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import NumberedList from '../../NumberedList'
import ChartLine from "../../../../../assets/lines/chart-line.svg"
import ButtonSelengkapnya from '../../ButtonSelengkapnya'

const URL = "https://drive.google.com/file/d/1qIS5lcCEV6LuR7sCAgIXAoSnxlLYVj3G/view?usp=share_link";
const DATA = [
  { label: "radio talkshow", value: 1 },
  { label: "radio insertion", value: 120 },
];

const MediaElektronik: React.FC = () => {
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
        data={ DATA }
      />
      <Box marginTop="20px">
        <ButtonSelengkapnya
          url={ URL }
          fullWidth
        />
      </Box>
    </Box>
  )
}

export default MediaElektronik