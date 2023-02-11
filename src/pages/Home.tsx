import React from 'react'
import BasePage from '../components/templates/BasePage'
import DescriptionBox from '../components/home/DescriptionBox'
import { Flex, Image } from '@chakra-ui/react'
import KPI from '../components/home/organisms/KPI'
import useDataHome from '../hooks/useDataHome'
import MapIndo from "../assets/images/Peta.svg";
import LoginForm from '../components/login'

const Home: React.FC = () => {
  const {
    pendampingan, pelatihan, sosialisasi,
    error, isLoading
  } = useDataHome();

  return (
    <BasePage id="page-home">
      <Flex direction="column" rowGap="32px">
        <Flex justifyContent="space-between">
          <DescriptionBox />

          <Flex justifyContent="end">
            <Image src={ MapIndo } width="55vw" />
          </Flex>
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