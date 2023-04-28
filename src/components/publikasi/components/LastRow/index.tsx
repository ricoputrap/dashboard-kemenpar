import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import MediaElektronik from './MediaElektronik'
import MediaLuarRuang from './MediaLuarRuang'
import TopListMedia from './TopListMedia'

const LastRow: React.FC = () => {
  return (
    <Flex columnGap="44px">
      <Box width="100%">
        <Stack rowGap="60px">

          <MediaElektronik />
          <MediaLuarRuang />
          <TopListMedia />
        </Stack>
      </Box>
      <Box width="100%">Media Sosial</Box>
    </Flex>
  )
}

export default LastRow