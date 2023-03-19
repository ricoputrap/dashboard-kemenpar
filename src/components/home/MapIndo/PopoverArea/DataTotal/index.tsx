import React from 'react'
import { Flex, Text } from '@chakra-ui/react';

interface Props {
  total: number;
}

const DataTotal: React.FC<Props> = ({ total }) => {
  return (
    <Flex direction="column" rowGap={0}>
      <Text
        fontSize="14px"
        fontWeight={700}
        fontFamily="Montserrat"
        lineHeight="17px"
      >
        Total
      </Text>
      <Text
        fontSize="14px"
        fontWeight={500}
        fontFamily="Montserrat"
        lineHeight="17px"
      >
        { total } Desa Wisata
      </Text>
    </Flex>
  )
}

export default DataTotal