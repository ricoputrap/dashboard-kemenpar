import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter';
import useStore from '../../state/store';
import DataDesa from './DataDesa';
import { TPendampinganDesa } from '../../types/laporan.types';

const Laporan: React.FC = () => {
  const activeDPP: string = useStore(state => state.activeDPP);
  const dataPendampinganByDPP: TPendampinganDesa[] = useStore(
    (state) => state.getDataPendampinganByDPP(activeDPP)
  );

  return (
    <Box
      border="1px solid #EAC170"
      borderRadius="10px"
      background="rgba(17, 38, 71, 0.85);"
      padding="28px 28px 0 28px"
    >
      <Flex direction="column" rowGap="16px">
        <Filter />

        {/* Laporan Per Desa  */}
        <Flex
          direction="column"
          rowGap="16px"
          paddingX="16px"
          paddingY="32px"
          borderTop="1px solid #EAC170"
        >
          {dataPendampinganByDPP.map((data, index) => (
            <DataDesa
              nomor={ index + 1 }
              key={ data.desa }
              desa={ data.desa }
              kec={ data.kec }
              kab={ data.kab }
              urlProposal={ data.urlProposal }
              laporan={ data.laporan }
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Laporan