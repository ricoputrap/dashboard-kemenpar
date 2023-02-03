import React from 'react'
import DoughnutChartPeserta from '../../../reusables/organisms/DoughnutChartPeserta'
import useDataStatistikTotal from './useDataStatistikTotal'

const StatistikTotal: React.FC = () => {
  const { menData, womenData } = useDataStatistikTotal();

  return (
    <DoughnutChartPeserta
      title="Peserta Sosialisasi"
      menData={ menData }
      womenData={ womenData }
    />
  )
}

export default StatistikTotal