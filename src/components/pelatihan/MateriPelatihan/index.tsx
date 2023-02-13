import React from 'react'
import { Container } from './index.styles'
import DropdownMateri from './components/DropdownMateri'
import ChartLine from "../../../assets/lines/chart-line.svg";
import { Flex, Image, Text } from '@chakra-ui/react';

const MateriPelatihan: React.FC = () => {
  return (
    <Container>
      <DropdownMateri />
      
      <Flex columnGap="16px">
        <Image src={ ChartLine } />
        <Text fontSize="20px" fontWeight={500}>
          MATERI PELATIHAN
        </Text>
      </Flex>
    </Container>
  )
}

export default MateriPelatihan