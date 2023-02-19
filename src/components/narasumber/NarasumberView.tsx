import React from 'react'
import BasePage from '../templates/BasePage'
import { Flex, Stack } from '@chakra-ui/react'
import StatistikTotal from './components/StatistikTotal'
import TopListNarasumber from './TopListNarasumber'
import Komposisi from './Komposisi'
import Details from './Details'
import useInitData from './hooks/useInitData'

const NarasumberView: React.FC = () => {
  const { error, isLoading } = useInitData();

  if (isLoading) return (
    <Flex justifyContent="center" alignItems="center" paddingTop="100px">
      ...LOADING
    </Flex>
  )

  return (
    <BasePage id="page-narasumber">
      <Flex
        direction="row"
        justifyContent="space-between"
        columnGap="40px"
      >
        <Stack rowGap="44px" width="390px">
          <StatistikTotal />
          <TopListNarasumber />
        </Stack>

        <Stack>
          <Komposisi />
          <Details />
        </Stack>
      </Flex>
    </BasePage>
  )
}

export default NarasumberView