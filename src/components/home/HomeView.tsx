import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import useDataHome from './state/useDataHome'
import BasePage from '../templates/BasePage';
import DescriptionBox from './DescriptionBox';
import ImageContainer from './MapIndo/ImageContainer';
import ImageContent from './MapIndo/ImageContent';
import StatisticContainer from './organisms/StatisticContainer';
import KPI from './organisms/KPI';
import MapIndo from "../../assets/images/Peta.svg";
import ItemAreas from './components/ItemAreas';

const HomeView: React.FC = () => {
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
            <ItemAreas />
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

export default HomeView