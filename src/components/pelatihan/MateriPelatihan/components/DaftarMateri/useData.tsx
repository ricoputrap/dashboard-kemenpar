import React, { useMemo } from 'react'
import { TMateri, TMateriPerJenis } from '../../state/index.types'
import useMateriStore from '../../state/store'

const useData = () => {
  const tahun: number = 2022;
  const jenisMateri = useMateriStore(state => state.jenisMateri);
  const materiPertahun = useMateriStore(state => state.materiPertahun);

  const daftarMateri: TMateri[] = useMemo(() => {
    if (!materiPertahun.hasOwnProperty(tahun))
      return [];

    const materiSetahun: TMateriPerJenis = materiPertahun[tahun];
    if (!materiSetahun.hasOwnProperty(jenisMateri))
      return [];
    
    return materiSetahun[jenisMateri] || [];
  }, [materiPertahun, jenisMateri, tahun]);

  return daftarMateri;
}

export default useData