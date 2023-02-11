import React from 'react'
import useDataStatistik from './useDataStatistik'
import GroupedKPIPeserta from '../../../../reusables/organisms/GroupedKPIPeserta';

const StatistikBoxes: React.FC = () => {
  const data = useDataStatistik();

  return (
    <GroupedKPIPeserta
      title="Jumlah Peserta Pelatihan DPP"
      data={ data }
    />
  )
}

export default StatistikBoxes