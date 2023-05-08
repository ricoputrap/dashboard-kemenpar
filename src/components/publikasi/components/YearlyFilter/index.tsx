import React from 'react'
import FilterTahun from '../../../reusables/molecules/FilterTahun';
import useData from './useData'

const YearlyFilter: React.FC = () => {
  const { tahun, daftarTahun, setTahun } = useData();

  return (
    <FilterTahun
      tahun={ tahun }
      daftarTahun={ daftarTahun }
      setTahun={ setTahun }
    />
  )
}

export default YearlyFilter