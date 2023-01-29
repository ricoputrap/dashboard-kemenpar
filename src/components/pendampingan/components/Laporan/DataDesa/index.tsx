import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Proposal from '../Proposal';

interface Props extends TPendampinganDesa {
  nomor: number;
}

const DataDesa: React.FC<Props> = ({
  nomor,
  desa,
  kec,
  kab,
  urlProposal,
  laporan
}) => {
  return (
    <Flex justifyContent="space-between">
      <Flex columnGap="12px" alignItems="center">
        {/* No */}
        <Text fontSize="20px" fontWeight={700} lineHeight="24px">
          { nomor }.
        </Text>

        {/* Detail Desa */}
        <Box>
          <Text fontSize="16px" fontWeight={700} lineHeight="20px">
            { desa.toUpperCase() }
          </Text>
          <Text fontSize="16px" fontWeight={400} lineHeight="20px">
            { kec.toUpperCase() }, { kab.toUpperCase() }
          </Text>
        </Box>
      </Flex>

      {/* Proposal & Laporan */}
      <Flex columnGap="12px">

        {/* PROPOSAL */}
        <Proposal url={ urlProposal } />
      </Flex>
    </Flex>
  )
}

export default DataDesa