import React from 'react'
import { Container } from './index.styles'
import DropdownMateri from './components/DropdownMateri'
import ChartLine from "../../../assets/lines/chart-line.svg";
import { Flex, Image, Text } from '@chakra-ui/react';
import DaftarMateri from './components/DaftarMateri';

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

      <DaftarMateri />
    </Container>
  )
}

export default MateriPelatihan