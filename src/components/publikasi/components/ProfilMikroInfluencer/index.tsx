import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { ColumnData, ColumnHeader, Container, RowData } from './index.styles'

const ProfilMikroInfluencer: React.FC = () => {
  return (
    <Container>
      <Text
        color="#EAC170"
        fontSize="25px"
        fontWeight={700}
        textAlign="center"
        marginBottom="20px"
      >
        PROFIL MIKRO INFLUENCER
      </Text>

      <TableContainer
        overflowY="scroll"
        maxHeight="620px"
        whiteSpace="break-spaces"
        maxW="575px"
      >
        <Table variant="unstyled">
          <Thead position="sticky" top={0}>
            <Tr maxW="540px">
              <ColumnHeader
                background="white"
                color="#112647"
                borderRadius="5px 0 0 5px"
              >
                Nama
              </ColumnHeader>
              <ColumnHeader
                background="white"
                color="#112647"
              >
                Asal
              </ColumnHeader>
              <ColumnHeader
                background="white"
                color="#112647"
              >
                Follower
              </ColumnHeader>
              <ColumnHeader
                background="white"
                color="#112647"
                borderRadius="0 5px 5px 0"
              >
                Engagement Rate
              </ColumnHeader>
            </Tr>
          </Thead>

          <Tbody>
            <RowData>
              <ColumnData>Nama Orang 1 Manusia</ColumnData>
              <ColumnData>Jakarta</ColumnData>
              <ColumnData>48.6K</ColumnData>
              <ColumnData>48.6K</ColumnData>
            </RowData>
            <RowData>
              <ColumnData>Nama Orang 1 Manusia</ColumnData>
              <ColumnData>Jakarta</ColumnData>
              <ColumnData>48.6K</ColumnData>
              <ColumnData>48.6K</ColumnData>
            </RowData>
            <RowData>
              <ColumnData>Nama Orang 1 Manusia</ColumnData>
              <ColumnData>Jakarta</ColumnData>
              <ColumnData>48.6K</ColumnData>
              <ColumnData>48.6K</ColumnData>
            </RowData>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ProfilMikroInfluencer