import React from 'react'
import BasePage from '../templates/BasePage'
import { Box, Flex } from '@chakra-ui/react'
import Filter from './components/Filter'
import useInitData from './useInitData'

const LocalChampionView: React.FC = () => {
  const { championError, isChampionLoading } = useInitData();
  
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

          {/* Data Bulanan per Desa */}
          <Flex
            direction="column"
            rowGap="16px"
            paddingX="16px"
            paddingY="32px"
            borderTop="1px solid #EAC170"
          >
            
          </Flex>
        </Flex>
      </Box>
    </BasePage>
  )
}

export default LocalChampionView