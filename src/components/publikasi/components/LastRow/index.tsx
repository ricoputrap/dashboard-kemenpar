import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import NumberedList from '../NumberedList'
import MediaElektronik from './MediaElektronik'

const LastRow: React.FC = () => {
  return (
    <Flex columnGap="44px">
      <Box width="100%">
        <Stack rowGap="60px">

          <MediaElektronik />
        <div>HAHA</div>
        <div>HAHA</div>
        </Stack>
      </Box>
      <Box width="100%">Media Sosial</Box>
    </Flex>
  )
}

export default LastRow