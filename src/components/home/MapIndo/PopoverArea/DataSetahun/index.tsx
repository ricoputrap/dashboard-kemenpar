import React from 'react'
import { TDataSetahun } from '../../index.types'
import { Flex, Text } from '@chakra-ui/react';

type Props = TDataSetahun;

const DataSetahun: React.FC<Props> = ({ tahun, jumlah }) => {
  return (
    <Flex direction="column" rowGap={0}>
      <Text
        fontSize="14px"
        fontWeight={700}
        fontFamily="Montserrat"
        lineHeight="17px"
      >
        { tahun }
      </Text>
      <Text
        fontSize="14px"
        fontWeight={500}
        fontFamily="Montserrat"
        lineHeight="17px"
      >
        { jumlah } Desa Wisata
      </Text>
    </Flex>
  )
}

export default DataSetahun