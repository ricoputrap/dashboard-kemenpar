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
  desa, kec, kab, urlProposal,
  laporan_1,
  laporan_2,
  laporan_3,
  laporan_4,
  laporan_5
}) => {
  const jmlLaporan: string = useMemo(() => {
    let total: number = 0;
    if (!!laporan_1) total++;
    if (!!laporan_2) total++;
    if (!!laporan_3) total++;
    if (!!laporan_4) total++;
    if (!!laporan_5) total++;

    return `${total}/5`;
  }, [laporan_1, laporan_2, laporan_3, laporan_4, laporan_5]);

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

        {/* LAPORAN */}
        <LaporanItem nomor={1} url={ laporan_1 } />
        <LaporanItem nomor={2} url={ laporan_2 } />
        <LaporanItem nomor={3} url={ laporan_3 } />
        <LaporanItem nomor={4} url={ laporan_4 } />
        <LaporanItem nomor={5} url={ laporan_5 } />

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