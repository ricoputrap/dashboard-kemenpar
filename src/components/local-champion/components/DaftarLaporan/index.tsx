import React, { useMemo, useRef } from 'react'
import { TLaporanBulanan } from '../../state/index.types'
import { Flex, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { BoxContainer, IconBox, Label, LabelSmall } from './index.styles';
import useWindowSize from '../../../../hooks/useWindowSize';
import UserIcon from "../../../../assets/icons/user-fill.svg"

interface Props {
  data: TLaporanBulanan[];
}

const DaftarLaporan: React.FC<Props> = ({ data }) => {
  const boxListRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const boxContainerWidth = useMemo(() => {
    const PAGE_PADDING_X = 56 * 2;
    const PAGE_CONTENT_PADDING_X = 28 * 2;
    const PAGE_CONTENT_BORDER_X = 1 * 2;

    const ROW_PADDING_LEFT = 16;
    const AREA_WIDTH = 286;
    const ARROWS_WIDTH = 32 * 2;
    const GAP_WITH_ARROWS = 4 * 2;

    const totalWidth = PAGE_PADDING_X
      + PAGE_CONTENT_PADDING_X
      + PAGE_CONTENT_BORDER_X
      + ROW_PADDING_LEFT
      + AREA_WIDTH
      + ARROWS_WIDTH
      + GAP_WITH_ARROWS
      + 4; // extra

    const containerWidth = width - totalWidth;
    return containerWidth
  }, [width])

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
    <Flex alignItems="center" columnGap="4px">
      <IconBox onMouseDown={() => handleMouseDown(-100)}>
        <ChevronLeftIcon width="32px" />
      </IconBox>

      <BoxContainer width={boxContainerWidth} ref={ boxListRef }>
        <Flex
          minWidth="134px"
          height="34.44px"
          alignItems="center"
          justifyContent="start"
          background="#00F6E8"
          paddingLeft="10px"
          columnGap="12px"
          cursor="pointer"
        >
          <Image src={ UserIcon } width="20px" height="20px" />
          <LabelSmall>Profile L. Champion</LabelSmall>
        </Flex>

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

      <IconBox onMouseDown={() => handleMouseDown(100)}>
        <ChevronRightIcon width="32px" />
      </IconBox>
    </Flex>
  )
}

export default DaftarLaporan