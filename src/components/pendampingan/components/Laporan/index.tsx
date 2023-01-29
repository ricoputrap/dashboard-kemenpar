import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter';

const Laporan: React.FC = () => {

  return (
    <Box
      border="1px solid #EAC170"
      borderRadius="10px"
      background="rgba(17, 38, 71, 0.85);"
      padding="28px"
    >
      <Flex direction="column">
        <Filter />

        {/* Laporan Per Desa  */}
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default Laporan