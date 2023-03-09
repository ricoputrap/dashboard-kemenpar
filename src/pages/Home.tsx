import React from 'react'
import BasePage from '../components/templates/BasePage'
import DescriptionBox from '../components/home/DescriptionBox'
import { Box, Flex, Image } from '@chakra-ui/react'
import KPI from '../components/home/organisms/KPI'
import useDataHome from '../hooks/useDataHome'
import MapIndo from "../assets/images/Peta.svg";
import withAuth from '../hoc/withAuth'

const Home: React.FC = () => {
  const {
    pendampingan, pelatihan, sosialisasi,
    error, isLoading
  } = useDataHome();

  return (
    <BasePage id="page-home">
      <Flex direction="column" rowGap="32px">
        <Flex
          justifyContent="space-between"
          flexWrap="wrap-reverse"
          gap="20px"
        >
          <Box
            width={{ base: "100%", xl: "35%" }}
            height="300px"
          >
            <DescriptionBox
              height='300px'
            />
          </Box>

          <Flex
            justifyContent={{ base: "center", xl: "end" }}
            width={{ base: "100%", xl: "55vw" }}
          >
            <Image
              src={ MapIndo }
              width={{ base: "794px", xl: "55vw" }}
            />
          </Flex>
        </Flex>

        <Flex
          justifyContent={{ base: "center", xl: "space-between" }}
          flexWrap={{ base: "wrap", xl: "nowrap" }}
          gap="20px"
        >
          <KPI data={ sosialisasi } />
          <KPI data={ pelatihan } />
          <KPI data={ pendampingan } />
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default withAuth(Home);