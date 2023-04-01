import React from 'react'
import { Container } from './index.styles'
import DropdownMateri from './components/DropdownMateri'
import ChartLine from "../../../assets/lines/chart-line.svg";
import { Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
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

      <Flex wrap="wrap" gap="6px">
        <Text fontSize="16px" fontWeight={500}>
          Untuk mengunduh materi ini dapat mengakses
        </Text>
        <Link href="https://elearning.kemenparekraf.go.id/" isExternal>
          <Text fontSize="16px" fontWeight={500} color="blue.400">
            https://elearning.kemenparekraf.go.id/
          </Text>
        </Link>
      </Flex>
    </Container>
  )
}

export default MateriPelatihan