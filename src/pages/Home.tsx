import React from 'react'
import BasePage from '../components/templates/BasePage'
import DescriptionBox from '../components/home/DescriptionBox'
import { Box, Flex, Text } from '@chakra-ui/react'
import KPI from '../components/home/organisms/KPI'
import useDataHome from '../hooks/useDataHome'
import MapIndo from "../assets/images/Peta.svg";
import withAuth from '../hoc/withAuth'
import ImageContainer from '../components/home/MapIndo/ImageContainer'
import ImageContent from '../components/home/MapIndo/ImageContent'
import StatisticContainer from '../components/home/organisms/StatisticContainer'

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
            height="300px"
            width={{
              base: "100%",
              xl: "425px"
            }}
          >
            <DescriptionBox
              height='300px'
            />
          </Box>

          <ImageContainer
            justifyContent={{
              base: "center",
              xl: "end"
            }}
            position="relative"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              position="absolute"
              left="68px"
              top="28px"
              width="52px"
              height="14px"
              background="#e9c270"
              borderRadius="5px"
            >
              <Text
                fontSize="12px"
                fontWeight={400}
                color="black"
              >
                TOBA
              </Text>
            </Flex>
            <ImageContent src={ MapIndo } />
          </ImageContainer>
        </Flex>

        <StatisticContainer>
          <KPI data={ sosialisasi } />
          <KPI data={ pelatihan } />
          <KPI data={ pendampingan } />
        </StatisticContainer>
      </Flex>
    </BasePage>
  )
}

export default withAuth(Home);