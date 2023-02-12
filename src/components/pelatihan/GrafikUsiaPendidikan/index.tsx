import React, { useMemo } from 'react'
import DropdownLokasi from './components/DropdownLokasi'
import { ChartContainer, Container } from './index.styles'
import GrafikUsia from './components/GrafikUsia'
import useWindowSize from '../../../hooks/useWindowSize'
import { getChartWidth, getHalfChartWidth } from './utils'
import GrafikPendidikan from './components/GrafikPendidikan'

const GrafikUsiaPendidikan: React.FC = () => {
  const { width } = useWindowSize();

  const barChartsWidth: number = useMemo(() => {
    const normalWidth: number = getChartWidth(width);
    const haflWidth: number = getHalfChartWidth(normalWidth);
    return haflWidth;
  }, [width]);

  return (
    <Container>
      <DropdownLokasi />
      
      <ChartContainer>
        <GrafikUsia width={ barChartsWidth } />
        <GrafikPendidikan width={ barChartsWidth } />
      </ChartContainer>
    </Container>
  )
}

export default GrafikUsiaPendidikan