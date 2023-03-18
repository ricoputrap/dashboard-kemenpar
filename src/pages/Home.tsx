import React from 'react'
import BasePage from '../components/templates/BasePage'
import DescriptionBox from '../components/home/DescriptionBox'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import KPI from '../components/home/organisms/KPI'
import useDataHome from '../hooks/useDataHome'
import MapIndo from "../assets/images/Peta.svg";
import withAuth from '../hoc/withAuth'
import styled from '@emotion/styled'

const ImageContainer = styled(Flex)`
  width: 100%;

  @media (min-width: 1280px) {
    width: 700px;
  }

  @media (min-width: 1310px) {
    width: 750px;
  }

  @media (min-width: 1440px) {
    width: 800px;
  }
`;

const ImageContent = styled(Image)`
  width: 800px;

  @media (min-width: 1110px) {
    width: 900px;
  }

  @media (min-width: 1280px) {
    width: 700px;
  }

  @media (min-width: 1310px) {
    width: 750px;
  }

  @media (min-width: 1440px) {
    width: 800px;
  }
`;

const StatisticContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 1365px) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

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
            <ImageContent
              src={ MapIndo }
            />
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