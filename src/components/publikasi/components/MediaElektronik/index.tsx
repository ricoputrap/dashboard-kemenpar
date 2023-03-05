import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Ring from '../Ring'
import ChartLine from "../../../../assets/lines/chart-line.svg"

const MediaElektronik: React.FC = () => {
  return (
    <Box width="100%">
      <Image src={ ChartLine } width="100%" />

      <Flex columnGap="16px" marginTop="24px">
        <Ring>
          <Stack>
            <Text
              fontSize="20px"
              fontWeight={600}
              textAlign="center"
            >
              MEDIA
            </Text>
            <Text
              fontSize="15px"
              fontWeight={600}
              textAlign="center"
              color="#EAC170"
              marginTop="0 !important"
            >
              ELEKTRONIK
            </Text>
          </Stack>
        </Ring>

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