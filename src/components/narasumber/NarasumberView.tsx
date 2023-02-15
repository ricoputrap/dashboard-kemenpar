import React from 'react'
import BasePage from '../templates/BasePage'
import { Flex, Stack } from '@chakra-ui/react'
import JumlahNarasumber from './JumlahNarasumber'
import TopListNarasumber from './TopListNarasumber'
import Komposisi from './Komposisi'

const NarasumberView: React.FC = () => {
  return (
    <BasePage id="page-narasumber">
      <Flex
        direction="row"
        justifyContent="space-between"
        columnGap="40px"
      >
        <Stack rowGap="44px" width="390px">
          <JumlahNarasumber />
          <TopListNarasumber />
        </Stack>

        <Stack>
          <Komposisi />
          <div>data narasumber</div>
        </Stack>
      </Flex>
    </BasePage>
  )
}

export default NarasumberView