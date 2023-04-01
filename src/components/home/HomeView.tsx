import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import useDataHome from './state/useDataHome'
import BasePage from '../templates/BasePage';
import DescriptionBox from './DescriptionBox';
import ImageContainer from './MapIndo/ImageContainer';
import ItemAreaToba from './MapIndo/ItemAreaToba';
import ItemArea from './MapIndo/ItemArea';
import ImageContent from './MapIndo/ImageContent';
import StatisticContainer from './organisms/StatisticContainer';
import KPI from './organisms/KPI';
import MapIndo from "../../assets/images/Peta.svg";

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
            <ItemAreaToba>
              <ItemArea label="TOBA" data={[
              { tahun: 2022, jumlah: 18 },
              { tahun: 2023, jumlah: 10 }
            ]} />
            </ItemAreaToba>
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