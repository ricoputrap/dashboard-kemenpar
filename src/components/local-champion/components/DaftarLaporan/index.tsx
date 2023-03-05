import React from 'react'
import { TLaporanBulanan } from '../../state/index.types'
import { Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { BoxContainer, Label } from './index.styles';

interface Props {
  data: TLaporanBulanan[];
}

const DaftarLaporan: React.FC<Props> = ({ data }) => {
  return (
    <Flex alignItems="center">
      <ChevronLeftIcon width="32px" />

      <BoxContainer width={896}>
        {data.map(laporan => (
          <Flex
            key={ laporan.bulan }
            minWidth="134px"
            height="34.44px"
            border="1.57px solid #FFFFFF"
            alignItems="center"
            justifyContent="center"
          >
            <Label>
              { laporan.bulan }
            </Label>
          </Flex>
        ))}
      </BoxContainer>

      <ChevronRightIcon width="32px" />
    </Flex>
  )
}

export default DaftarLaporan