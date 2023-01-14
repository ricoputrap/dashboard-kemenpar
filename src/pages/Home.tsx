import React from 'react'
import BasePage from '../components/templates/BasePage'
import DescriptionBox from '../components/home/DescriptionBox'
import { Flex } from '@chakra-ui/react'
import KPI from '../components/home/organisms/KPI'

const Home: React.FC = () => {
  return (
    <BasePage id="page-home">
      <Flex direction="column" rowGap="15px">
        <Flex>
          <DescriptionBox />
        </Flex>

        <Flex>
          <KPI />
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default Home