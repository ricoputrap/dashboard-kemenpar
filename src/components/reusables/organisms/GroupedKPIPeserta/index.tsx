import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import KPIPeserta from '../StatistikPeserta';
import ChartLine from "../../../../assets/lines/chart-line.svg"
import { KPIPesertaType } from '../StatistikPeserta/index.types';

interface Props {
  title: string;
  data: KPIPesertaType[];
}

const GroupedKPIPeserta: React.FC<Props> = ({ title, data }) => {
  return (
    <Box>
      <Image src={ ChartLine } width="100%" />
      <Text
        fontSize="15px"
        fontWeight={500}
        lineHeight="18px"
        textTransform="uppercase"
        marginTop="12px"
        marginBottom="18px"
        textAlign="center"
      >
        { title }
      </Text>
      <Flex wrap="wrap" gap="15px">
        {data.map(peserta => (
          <Box width="120px" key={peserta.lokasi}>
            <KPIPeserta
              lokasi={ peserta.lokasi }
              target={ peserta.target }
              realisasi={ peserta.realisasi }
              laki={ peserta.laki }
              perempuan={ peserta.perempuan }
            />
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default GroupedKPIPeserta