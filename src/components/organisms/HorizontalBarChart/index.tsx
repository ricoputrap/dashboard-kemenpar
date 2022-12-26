import { Box, Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import HorizontalBarItem from '../../atoms/HorizontalBarItem';
import chartLineImg from "../../../assets/lines/chart-line.svg";

type Props = {
  
}

const data = [
  { name: "TOBA", percent: 79 },
  { name: "BYP", percent: 59 },
  { name: "BTS", percent: 45 },
  { name: "LOMBOK", percent: 37 }
]

const HorizontalBarChart: React.FC<Props> = ({ }) => {
  return (
    <Box>
      <Box marginBottom="12px">
        <Image src={chartLineImg} />
      </Box>

      <Box marginBottom="12px">
        <Heading
          fontSize="20px"
          fontFamily="Montserrat"
          fontWeight={500}
        >
          TOP LIST
        </Heading>
      </Box>

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
                  >
                    { item.name }
                  </Td>

                  <Td
                    width="190px"
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
                    fontSize="20px"
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