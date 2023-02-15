import React from 'react'
import useData from './useData'
import BarChart from '../../../../reusables/organisms/BarChart';

interface Props {
  width: number;
}

const Grafik: React.FC<Props> = ({ width }) => {
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

export default Grafik