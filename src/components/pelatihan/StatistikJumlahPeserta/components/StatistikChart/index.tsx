import React from 'react'
import DoughnutChartPeserta from '../../../../reusables/organisms/DoughnutChartPeserta'
import useData from './useData'

const StatistikChart: React.FC = () => {
  const { menData, womenData } = useData();

  return (
    <DoughnutChartPeserta
      title="Peserta Pelatihan"
      menData={ menData }
      womenData={ womenData }
    />
  )
}

export default StatistikChart