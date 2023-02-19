import React from 'react'
import useData from './useData'
import DoughnutChartPeserta from '../../../reusables/organisms/DoughnutChartPeserta';

const StatistikTotal: React.FC = () => {
  const { menData, womenData } = useData();

  return (
    <DoughnutChartPeserta
      title="JUMLAH NARASUMBER"
      menData={ menData }
      womenData={ womenData }
    />
  )
}

export default StatistikTotal