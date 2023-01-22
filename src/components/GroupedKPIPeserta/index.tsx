import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import KPIPeserta from '../KPIPeserta';

type KPIPesertaType = {
  lokasi: string;
  target: number;
  realisasi: number;
  laki: number;
  perempuan: number;
}

interface Props {
  data: KPIPesertaType[];
}

const GroupedKPIPeserta: React.FC<Props> = ({ data }) => {
  return (
    <Flex wrap="wrap" gap="15px">
      {data.map(peserta => (
        <Box width="120px" key={peserta.lokasi}>
          <KPIPeserta
            lokasi={ peserta.lokasi }
            target={ peserta.target }
            realisasi={ peserta.perempuan }
            laki={ peserta.laki }
            perempuan={ peserta.perempuan }
          />
        </Box>
      ))}
    </Flex>
  )
}

export default GroupedKPIPeserta