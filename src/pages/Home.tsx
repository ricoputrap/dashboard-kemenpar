import React from 'react'
import BasePage from '../components/templates/BasePage'
import DescriptionBox from '../components/home/DescriptionBox'
import { Flex } from '@chakra-ui/react'
import KPI from '../components/home/organisms/KPI'
import useDataHome from '../hooks/useDataHome'

const Home: React.FC = () => {
  const {
    pendampingan, pelatihan, sosialisasi,
    error, isLoading
  } = useDataHome();

  return (
    <BasePage id="page-home">
      <Flex direction="column" rowGap="15px">
        <Flex>
          <DescriptionBox />
        </Flex>

        <Flex justifyContent="space-between">
          <KPI data={ sosialisasi } />
          <KPI data={ pelatihan } />
          <KPI data={ pendampingan } />
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default Home