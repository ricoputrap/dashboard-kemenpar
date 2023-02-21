import { Stack, Table, TableContainer, Tbody, Text, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { ColumnData, ColumnHeader } from './index.styles'
import useData from './useData'

const DataTable: React.FC = () => {
  const data = useData();
  
  return (
    <TableContainer overflowY="scroll" maxHeight="307px" whiteSpace="break-spaces">
      <Table variant="simple">
        <Thead position="sticky" top={0}>
          <Tr>
            <ColumnHeader width="50px" paddingX="20px">
              No
            </ColumnHeader>
            <ColumnHeader>Nama</ColumnHeader>
            <ColumnHeader>Institusi</ColumnHeader>
            <ColumnHeader width="100px" paddingX="20px">
              Domisili
            </ColumnHeader>
            <ColumnHeader width="250px">Materi Ajar</ColumnHeader>
          </Tr>
        </Thead>

        <Tbody>
          {data.map(rowData => (
            <Tr key={ rowData.no }>
              <ColumnData width="50px" paddingX="20px">
                { rowData.no }.
              </ColumnData>
              <ColumnData>{ rowData.nama }</ColumnData>
              <ColumnData>
                <Text>
                  { rowData.institusi }
                </Text>
              </ColumnData>
              <ColumnData width="100px" paddingX="20px">
                { rowData.domisili }
              </ColumnData>

              <ColumnData width="250px">
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