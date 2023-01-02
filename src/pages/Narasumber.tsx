import React from 'react'
import BasePage from '../components/templates/BasePage'
import useDataNarasumber from '../hooks/useDataNarasumber'
import { Box, Flex, Text } from '@chakra-ui/react';
import LineChart from '../components/organisms/LineChart';

const Narasumber: React.FC = () => {
  const { dataNarasumber } = useDataNarasumber();
  return (
    <BasePage id="page-narasumber">
      <Flex
        marginTop="40px"
        paddingX="20px"
        columnGap="40px"
        paddingBottom="100px"
        justifyContent="space-between"
      >
        <Flex direction="column" rowGap="100px">
          <Box>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={500}
            >
              TOTAL NARASUMBER
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={500}
            >
              JENIS KELAMIN NARASUMBER
            </Text>
          </Box>
        </Flex>

        <Flex direction="column" rowGap="100px">
          <LineChart
            title="GRAFIK NARASUMBER"
            data={ dataNarasumber }
            height={200}
            width={900}
            legendPosition="top"
          />
        </Flex>

      </Flex>
    </BasePage>
  )
}

export default Narasumber