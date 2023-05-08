import React, { useMemo } from 'react'
import usePublikasiStore from '../../state/store'

const useData = () => {
  const tahun = usePublikasiStore(state => state.tahun);
  const setTahun = usePublikasiStore(action => action.setTahun);
  const daftarTahun = useMemo(() => [2022, 2023], []);

  return { tahun, setTahun, daftarTahun }
}

export default useData