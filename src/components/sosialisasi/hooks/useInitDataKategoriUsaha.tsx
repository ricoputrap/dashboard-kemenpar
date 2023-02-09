import React, { useEffect } from 'react'
import API from '../../../API';
import useKategoriUsahaStore from '../state/kategoriUsaha/store';
import { TKategoriUsahaSetahun } from '../../../API/sosialisasi/kategoriUsaha';
import useSosialisasiStore from '../state/store';

interface ReturnValue {
  kategoriUsahaError: any;
  isKategoriUsahaLoading: boolean;
}

const useInitDataKategoriUsaha = (): ReturnValue => {
  const tahun = useSosialisasiStore(state => state.tahun);
  const { data, error, isLoading } = API.sosialisasi.kategoriUsaha(tahun);

  const {
    setTahun,
    setKategoriUsahaPertahun
  } = useKategoriUsahaStore();
  
  useEffect(() => {
    if (!data) return;

    const { tahun, data: dataKategoriUsaha }: TKategoriUsahaSetahun = data.data;

    setTahun(tahun);
    setKategoriUsahaPertahun(dataKategoriUsaha, tahun);
  }, [data]);

  return {
    kategoriUsahaError: error,
    isKategoriUsahaLoading: isLoading
  }
}

export default useInitDataKategoriUsaha