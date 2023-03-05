import React, { useRef } from 'react'
import { TLaporanBulanan } from '../../state/index.types'
import { Box, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { BoxContainer, Label } from './index.styles';

interface Props {
  data: TLaporanBulanan[];
}

const DaftarLaporan: React.FC<Props> = ({ data }) => {
  const boxListRef = useRef<HTMLDivElement>(null);

  const scrollBoxes = (distance: number) => {
    if (!boxListRef.current) return;
    boxListRef.current.scrollBy({
      left: distance,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (distance: number) => {
    let intervalId = setInterval(() => {
      scrollBoxes(distance);
    }, 20);

    document.addEventListener('mouseup', () => {
      clearInterval(intervalId);
    });
  };

  return (
    <Flex alignItems="center">
      <Box onMouseDown={() => handleMouseDown(-100)}>
        <ChevronLeftIcon width="32px" />
      </Box>

      <BoxContainer width={896} ref={ boxListRef }>
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

      <Box onMouseDown={() => handleMouseDown(100)}>
        <ChevronRightIcon width="32px" />
      </Box>
    </Flex>
  )
}

export default DaftarLaporan