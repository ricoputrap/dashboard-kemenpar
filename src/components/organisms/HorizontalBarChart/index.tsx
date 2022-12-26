import { Box, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import HorizontalBarItem from '../../atoms/HorizontalBarItem';
import chartLineImg from "../../../assets/lines/chart-line.svg";
import { TBarChartItem } from '../../../types/charts.type';
import useData from './useData';

type Props = {
  title: string;
  dataInput: TBarChartItem[];
}

const HorizontalBarChart: React.FC<Props> = ({ title, dataInput }) => {
  const {
    data,
    categories,
    activeCategory,
    changeCategory
  } = useData(dataInput);

  return (
    <Box>
      <Box marginBottom="12px">
        <Image src={chartLineImg} />
      </Box>

      <Flex marginBottom="20px" justifyContent="space-between">
        <Heading
          fontSize="20px"
          fontFamily="Montserrat"
          fontWeight={500}
        >
          { title }
        </Heading>

        <Flex fontSize="12px" fontWeight={400} columnGap="8px">
          {categories.map(category => (
            <Text
              textTransform="uppercase"
              color={category == activeCategory ? "main" : "white"}
              onClick={() => changeCategory(category)}
              _hover={{
                cursor: "pointer"
              }}
            >
              { category }
            </Text>
          ))}
        </Flex>
      </Flex>

      <TableContainer>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th height={0} padding={0} margin={0}></Th>
              <Th height={0} padding={0} margin={0}></Th>
              <Th height={0} padding={0} margin={0}></Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map(item => (
              <Box marginBottom="10px" key={item.name}>
                <Tr>
                  <Td
                    fontSize="12px"
                    fontWeight={400}
                    lineHeight="12px"
                    width="70px"
                    height="29px"
                    padding={0}
                    verticalAlign="middle"
                    textTransform="uppercase"
                  >
                    { item.name }
                  </Td>

                  <Td
                    width="220px"
                    height="29px"
                    padding={0}
                  >
                    <HorizontalBarItem percent={ item.percent } />
                  </Td>

                  <Td
                    height="29px"
                    width="70px"
                    paddingY={0}
                    paddingLeft="20px"
                    paddingRight={0}
                    fontSize="15px"
                    fontWeight={600}
                    verticalAlign="middle"
                  >
                    { item.percent }%
                  </Td>
                </Tr>
              </Box>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default HorizontalBarChart