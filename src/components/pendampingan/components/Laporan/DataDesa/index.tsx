import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import Proposal from '../Proposal';
import LaporanItem from '../LaporanItem';
import { TPendampinganDesa } from '../../../types/laporan.types';

interface Props extends TPendampinganDesa {
  nomor: number;
}

const DataDesa: React.FC<Props> = ({
  nomor,
  desa, kec, kab,
  urlProposal, laporan
}) => {
  const jmlLaporan: string = useMemo(() => {
    const total: number = laporan.length;
    return `${total}/5`;
  }, [laporan])

  return (
    <Flex justifyContent="space-between">
      <Flex columnGap="12px" alignItems="center" width="284px">
        {/* No */}
        <Text fontSize="20px" fontWeight={700} lineHeight="24px" width="27px">
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

        <Text
          fontSize="25px"
          fontWeight={400}
          lineHeight="30px"
          letterSpacing="0.05em"
          width="44px"
          textAlign="center"
        >
          { jmlLaporan }
        </Text>
      </Flex>
    </Flex>
  )
}

export default DataDesa