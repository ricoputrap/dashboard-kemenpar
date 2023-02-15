import React from 'react'
import BasePage from '../templates/BasePage'
import { Flex, Stack } from '@chakra-ui/react'
import JumlahNarasumber from './JumlahNarasumber'
import TopListNarasumber from './TopListNarasumber'

const NarasumberView: React.FC = () => {
  return (
    <BasePage id="page-narasumber">
      <Flex direction="row" justifyContent="space-between">
        <Stack rowGap="44px" width="390px">
          <JumlahNarasumber />
          <TopListNarasumber />
        </Stack>

        <Stack>
          <div>KOMPOSISI NARASUMBER</div>
          <div>data narasumber</div>
        </Stack>
      </Flex>
    </BasePage>
  )
}

export default NarasumberView