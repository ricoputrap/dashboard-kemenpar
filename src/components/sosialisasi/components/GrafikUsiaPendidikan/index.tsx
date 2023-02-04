import React, { useMemo } from 'react'
import { ChartContainer, Container } from './index.styles'
import { TDropdownItem } from '../../../../types/utils.type'
import GrafikUsia from './GrafikUsia'
import useWindowSize from '../../../../hooks/useWindowSize'
import DropdownLokasi from './DropdownLokasi'

const options: TDropdownItem[] = [
  { label: "TOBA", value: "TOBA" },
  { label: "BYP", value: "BYP" },
  { label: "BTDS", value: "BTDS" },
]

const getChartWidth = (width: number): number => {
  if (width == 0) {
    const WIDTH = 848;
    return WIDTH;
  }

  const DOUGHNUT_KPI_WIDTH = 390;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const GAP = 90;
    const deductedWidth = DOUGHNUT_KPI_WIDTH + PAGE_PADDING_HORIZONTAL + GAP;
    const remainingSpace = width - deductedWidth;

    return remainingSpace;
}

const getHalfChartWidth = (width: number): number => {
  const PADDING = 2 * 28;
  const GAP = 28;
  const deductedWidth = PADDING + GAP;
  
  const haflWidth = Math.ceil(width / 2);
  const result: number = haflWidth - deductedWidth - 32;

  return result;
}

const GrafikUsiaPendidikan: React.FC = () => {
  const { width } = useWindowSize();

  const barChartsWidth: number = useMemo(() => {
    const normalWidth: number = getChartWidth(width);
    const haflWidth: number = getHalfChartWidth(normalWidth);
    return haflWidth;
  }, [width])

  return (
    <Container>
      <DropdownLokasi />

      <ChartContainer>
        <GrafikUsia width={ barChartsWidth } />
      </ChartContainer>
    </Container>
  )
}

export default GrafikUsiaPendidikan