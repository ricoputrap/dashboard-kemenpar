import { Stack, Table, TableContainer, Tbody, Text, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { ColumnData, ColumnHeader } from './index.styles'
import useData from './useData'

const DataTable: React.FC = () => {
  const data = useData();
  
  return (
    <TableContainer
      overflowY="scroll"
      maxHeight="307px"
      whiteSpace="break-spaces"
    >
      <Table variant="simple">
        <Thead position="sticky" top={0}>
          <Tr>
            <ColumnHeader width="5%" paddingX="15px">
              No
            </ColumnHeader>
            <ColumnHeader width="25%">Nama</ColumnHeader>
            <ColumnHeader width="25%">Institusi</ColumnHeader>
            <ColumnHeader width="20%" paddingX="20px">
              Domisili
            </ColumnHeader>
            <ColumnHeader width="25%">Materi Ajar</ColumnHeader>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((rowData, index) => (
            <Tr key={ index + 1 }>
              <ColumnData width="5%" paddingX="15px">
                { index + 1 }.
              </ColumnData>
              <ColumnData width="25%">
              { rowData.nama }
              </ColumnData>
              <ColumnData width="25%">
                <Text>
                  { rowData.institusi }
                </Text>
              </ColumnData>
              <ColumnData>
                { rowData.domisili }
              </ColumnData>

              <ColumnData width="25%">
                <Stack>
                  {rowData.materi.map((item, index) => (
                    <Text key={ index }>
                      { item }
                    </Text>
                  ))}
                </Stack>
              </ColumnData>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default DataTable