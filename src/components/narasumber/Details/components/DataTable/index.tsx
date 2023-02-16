import { Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { ColumnData, ColumnHeader } from './index.styles'

const DataTable: React.FC = () => {
  return (
    <TableContainer overflowY="scroll" maxHeight="307px">
      <Table variant="simple">
        <Thead position="sticky" top={0}>
          <Tr>
            <ColumnHeader>No</ColumnHeader>
            <ColumnHeader>Nama</ColumnHeader>
            <ColumnHeader>Institusi</ColumnHeader>
            <ColumnHeader>Domisili</ColumnHeader>
            <ColumnHeader>Materi Ajar</ColumnHeader>
          </Tr>
        </Thead>

        <Tbody>
        <Tr>
            <ColumnData>1.</ColumnData>
            <ColumnData>Husein Hutagalung</ColumnData>
            <ColumnData>Univ. Trisakti</ColumnData>
            <ColumnData>Jakarta</ColumnData>
            <ColumnData>
              <Stack>
                <Text>CHSE</Text>
                <Text>Sapta Pesona</Text>
                <Text>Pelayanan Prima</Text>
                <Text>Manajemen Konflik</Text>
              </Stack>
            </ColumnData>
          </Tr>
          <Tr>
            <ColumnData>2.</ColumnData>
            <ColumnData>Husein Hutagalung</ColumnData>
            <ColumnData>Univ. Trisakti</ColumnData>
            <ColumnData>Jakarta</ColumnData>
            <ColumnData>
              <Stack>
                <Text>CHSE</Text>
                <Text>Sapta Pesona</Text>
                <Text>Pelayanan Prima</Text>
                <Text>Manajemen Konflik</Text>
              </Stack>
            </ColumnData>
          </Tr>
          <Tr>
            <ColumnData>3.</ColumnData>
            <ColumnData>Husein Hutagalung</ColumnData>
            <ColumnData>Univ. Trisakti</ColumnData>
            <ColumnData>Jakarta</ColumnData>
            <ColumnData>
              <Stack>
                <Text>CHSE</Text>
                <Text>Sapta Pesona</Text>
                <Text>Pelayanan Prima</Text>
                <Text>Manajemen Konflik</Text>
              </Stack>
            </ColumnData>
          </Tr>
          <Tr>
            <ColumnData>4.</ColumnData>
            <ColumnData>Husein Hutagalung</ColumnData>
            <ColumnData>Univ. Trisakti</ColumnData>
            <ColumnData>Jakarta</ColumnData>
            <ColumnData>
              <Stack>
                <Text>CHSE</Text>
                <Text>Sapta Pesona</Text>
                <Text>Pelayanan Prima</Text>
                <Text>Manajemen Konflik</Text>
              </Stack>
            </ColumnData>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default DataTable