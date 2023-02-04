import React from 'react'
import BarChart from '../../../reusables/organisms/BarChart'
import useData from './useData';

interface Props {
  width: number;
}

const GrafikKategoriUsaha: React.FC<Props> = ({ width }) => {
  const { labels, dataset } = useData();

  return (
    <BarChart
      title="Grafik Kategori Usaha"
      width={`${width}px`}
      height="150px"
      labels={ labels }
      dataset={ dataset }
    />
  )
}

export default GrafikKategoriUsaha