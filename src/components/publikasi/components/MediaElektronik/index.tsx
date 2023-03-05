import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import RingMedia from '../RingMedia'

const MediaElektronik: React.FC = () => {
  return (
    <Box id="media-elektronik" width="100%">
      <Image src={ ChartLine } width="100%" />

      <Flex columnGap="16px" marginTop="24px">
        <RingMedia media="Elektronik" />

        <Stack rowGap="16px" justifyContent="center">
          <Text fontSize="18px" fontWeight={500} lineHeight="16px">
            1 Talkshow
          </Text>
          <Text fontSize="18px" fontWeight={500} marginTop="0 !important">
            120 Radio Insertion
            <br/>di 6 DPP
          </Text>
        </Stack>
      </Flex>
    </Box>
  )
}

export default MediaElektronik