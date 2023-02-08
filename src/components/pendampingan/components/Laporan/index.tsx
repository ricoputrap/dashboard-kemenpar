import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter';
import DataDesa from './DataDesa';
import useDataLaporan from '../../hooks/useDataLaporan';

const Laporan: React.FC = () => {
  const dataPendampinganPerDesa = useDataLaporan();

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
          {dataPendampinganPerDesa.map((data, index) => (
            <DataDesa
              nomor={ index + 1 }
              key={ data.desa }
              desa={ data.desa }
              kec={ data.kec }
              kab={ data.kab }
              urlProposal={ data.urlProposal }
              laporan_1={ data.laporan_1 }
              laporan_2={ data.laporan_2 }
              laporan_3={ data.laporan_3 }
              laporan_4={ data.laporan_4 }
              laporan_5={ data.laporan_5 }
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Laporan