import React, { useMemo } from 'react'
import { Container } from './index.styles'
import Grafik from './components/Grafik'
import useWindowSize from '../../../hooks/useWindowSize';
import DropdownPelatihan from './components/DropdownPelatihan';

const GrafikNilai: React.FC = () => {
  const { width } = useWindowSize();

  const barChartsWidth: number = useMemo(() => {
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
  }, [width]);

  return (
    <Container>
      <DropdownPelatihan />
      <Grafik width={ barChartsWidth } />
    </Container>
  )
}

export default GrafikNilai