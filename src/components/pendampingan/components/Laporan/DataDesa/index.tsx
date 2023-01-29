import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Proposal from '../Proposal';
import LaporanItem from '../LaporanItem';

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
      <Flex columnGap="12px" alignItems="center">

        {/* PROPOSAL */}
        <Proposal url={ urlProposal } />

        {[0,1,2,3,4].map(index => (
          <LaporanItem
            key={ index }
            nomor={ index + 1 }
            data={ laporan[index] }
          />
        ))}

        <Text fontSize="25px" fontWeight={400} lineHeight="30px" letterSpacing="0.05em">
          3/5
        </Text>
      </Flex>
    </Flex>
  )
}

export default DataDesa