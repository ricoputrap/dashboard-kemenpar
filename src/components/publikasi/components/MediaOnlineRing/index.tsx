import { Box, Flex, Image, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import RingMedia from '../RingMedia'

const MediaOnlineRing: React.FC = () => {
  return (
    <Box id="media-online-ring" width="100%">
      <Image src={ ChartLine } width="100%" />

      <Flex columnGap="16px" marginTop="24px">
        <RingMedia media="Online" />

        <Stack rowGap="16px" justifyContent="center">
          <OrderedList>
            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px">
              <Text fontWeight={700}>Weekly Press Briefing</Text>
            </ListItem>

            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px" marginTop="14px">
              <Text fontWeight={700}>2 Media Center</Text>
              <Text fontWeight={500}>Kampanye Sadar Wisata</Text>
            </ListItem>

            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px" marginTop="14px">
              <Text fontWeight={700}>442</Text>
              <Text fontWeight={500}>Pemberitaan Online</Text>
            </ListItem>

            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px" marginTop="14px">
              <Flex columnGap="4px">
                <Text fontWeight={700}>30</Text>
                <Text fontWeight={500}>Siaran Pers</Text>
              </Flex>
            </ListItem>
          </OrderedList>
        </Stack>
      </Flex>
    </Box>
  )
}

export default MediaOnlineRing