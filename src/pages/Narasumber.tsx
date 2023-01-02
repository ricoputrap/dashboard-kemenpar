import React, { useMemo } from 'react'
import BasePage from '../components/templates/BasePage'
import useDataNarasumber from '../hooks/useDataNarasumber'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import LineChart from '../components/organisms/LineChart';
import HorizontalBarChart from '../components/organisms/HorizontalBarChart';
import MapIndo from "../assets/images/map-indo.svg";
import useWindowSize from '../hooks/useWindowSize';

const Narasumber: React.FC = () => {
  const { dataNarasumber, dataTopList } = useDataNarasumber();
  const { width, height } = useWindowSize();

  const narasumberGraphSize = useMemo(() => {
    const w = (width / 3) * 2
    const h = height / 4;

    return {
      width: w,
      height: 200
    }
  }, [width, height]);

  return (
    <BasePage id="page-narasumber">
      <Flex
        marginTop="80px"
        paddingX="20px"
        columnGap="40px"
        paddingBottom="100px"
        justifyContent="space-between"
      >
        <Flex direction="column" rowGap="100px">
          <Flex direction="column" alignItems="center" rowGap="12px">
            <Text
              fontFamily="Montserrat"
              fontSize="40px"
              fontWeight={500}
            >
              5.462
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={500}
            >
              TOTAL NARASUMBER
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center" rowGap="12px">
            <Text
              fontFamily="Montserrat"
              fontSize="40px"
              fontWeight={500}
            >
              5.462
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={500}
            >
              JENIS KELAMIN NARASUMBER
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" rowGap="60px">
          <Flex
            columnGap="20px"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Box>
              <Image src={MapIndo} width="630px" />
            </Box>
            <Box width="300px">
              <HorizontalBarChart
                title="TOP LIST NARASUMBER"
                dataInput={ dataTopList }
              />
            </Box>
          </Flex>

          <Box alignSelf="flex-end">
            <LineChart
              title="GRAFIK NARASUMBER"
              data={ dataNarasumber }
              height={ narasumberGraphSize.height }
              width={ narasumberGraphSize.width }
              legendPosition="top"
            />
          </Box>
        </Flex>

      </Flex>
    </BasePage>
  )
}

export default Narasumber