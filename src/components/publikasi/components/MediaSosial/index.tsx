import { Box, Flex, Image, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import RingMedia from '../RingMedia'

const MediaSosial: React.FC = () => {
  return (
    <Box id="media-sosial" width="100%">
      <Image src={ ChartLine } width="100%" />
      
      <Flex columnGap="16px" marginTop="24px">
        <RingMedia media="Sosial" />

        <Stack rowGap="16px" justifyContent="center">
          <OrderedList>
            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px">
              <Text fontWeight={700}>KONTEN</Text>
              <Text fontWeight={500}>44 Konten Infografis, Video, Video Animasi</Text>
            </ListItem>

            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px" marginTop="14px">
              <Text fontWeight={700}>7 Influencer Visit</Text>
            </ListItem>

            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px" marginTop="14px">
              <Text fontWeight={700}>2 IG Live Ngantri</Text>
            </ListItem>

            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px" marginTop="14px">
              <Text fontWeight={700}>2 Podcast</Text>
              <Text fontWeight={500}>Wonderful Indonesia</Text>
            </ListItem>

            <ListItem fontSize="15px" fontWeight={500} lineHeight="16px" marginTop="14px">
              <Flex columnGap="4px">
                <Text fontWeight={700}>2 UGC</Text>
                <Text fontWeight={500}>(Giveaway)</Text>
              </Flex>
            </ListItem>
          </OrderedList>
        </Stack>
      </Flex>
    </Box>
  )
}

export default MediaSosial