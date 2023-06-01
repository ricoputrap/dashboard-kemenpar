import { Box, Button, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { TProfilMikroInfluencer } from '../../../state/index.types'
import { ColumnData, ColumnHeader, Container, RowData } from './index.styles'

interface Props {
  data: TProfilMikroInfluencer[];
  url: string;
}

const ProfilMikroInfluencer: React.FC<Props> = ({ data, url }) => {
  return (
    <Box maxW="554px">
      <Container>
        <Text
          color="#EAC170"
          fontSize="22px"
          fontWeight={700}
          textAlign="center"
          marginBottom="20px"
        >
          PROFIL MIKRO INFLUENCER
        </Text>

        <TableContainer
          overflowY="scroll"
          maxHeight="400px"
          minW="515px"
          whiteSpace="break-spaces"
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
              {data.map((item, index) => (
                <RowData key={ index }>
                  <ColumnData>{ item.nama }</ColumnData>
                  <ColumnData>{ item.asal }</ColumnData>
                  <ColumnData>{ item.follower }</ColumnData>
                  <ColumnData>{ item.engagement_rate }</ColumnData>
                </RowData>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>

      <Button
        marginTop="20px"
        width="100%"
        background="#EAC170"
        color="#112647"
        as="a"
        href={ url }
        target="_blank"
      >
        SELENGKAPNYA
      </Button>
    </Box>
  )
}

export default ProfilMikroInfluencer