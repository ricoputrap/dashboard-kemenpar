import React from 'react'
import useDataStatistik from './useDataStatistik'
import GroupedKPIPeserta from '../../../reusables/organisms/GroupedKPIPeserta';

const Statistik: React.FC = () => {
  const { statistikPeserta } = useDataStatistik();

  return (
    <GroupedKPIPeserta
      title="Jumlah Peserta Sosialisasi DPP"
      data={ statistikPeserta }
    />
  )
}

export default Statistik