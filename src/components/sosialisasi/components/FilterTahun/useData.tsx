import React, { useMemo } from 'react'
import useSosialisasiStore from '../../state/store'

interface ReturnValue {
  tahun: number;
  daftarTahun: number[];
  setTahun: (tahun: number) => void;
}

const useData = (): ReturnValue => {
  const tahun: number = useSosialisasiStore(state => state.tahun);
  const setTahun = useSosialisasiStore(action => action.setTahun);
  const daftarTahun = useMemo(() => [2022, 2023], []);

  return { tahun, daftarTahun, setTahun }
}

export default useData