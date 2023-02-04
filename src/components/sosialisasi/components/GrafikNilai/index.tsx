import React from 'react'
import BarChart from '../../../reusables/organisms/BarChart'
import useData from './useData';

interface Props {
  width: number;
}

const GrafikNilai: React.FC<Props> = ({ width }) => {
  const { labels, dataset } = useData();
  
  return (
    <BarChart
      title="Grafik Nilai Pre Test & Post Test"
      width={ `${width}px` }
      height="150px"
      labels={ labels }
      dataset={ dataset }
      showLegends
      showGrid
    />
  )
}

export default GrafikNilai