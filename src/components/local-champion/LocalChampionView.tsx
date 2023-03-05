import React from 'react'
import BasePage from '../templates/BasePage'
import { Box, Flex } from '@chakra-ui/react'
import Filter from './components/Filter'

const LocalChampionView: React.FC = () => {
  return (
    <BasePage id="local-champion">
      <Box
        border="1px solid #EAC170"
        borderRadius="10px"
        background="rgba(17, 38, 71, 0.85);"
        padding="28px 28px 0 28px"
      >
        <Flex direction="column" rowGap="16px">
          <Filter />
        </Flex>
      </Box>
    </BasePage>
  )
}

export default LocalChampionView