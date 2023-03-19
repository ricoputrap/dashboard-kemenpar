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
  const {
    dpp,
    setKategoriUsahaPertahun
  } = useKategoriUsahaStore();
  const tahun = useSosialisasiStore(state => state.tahun);

  const { data, error, isLoading } = API.sosialisasi.kategoriUsaha(dpp, tahun);

  useEffect(() => {
    if (!data) return;

    const { dpp, data: dataKategoriUsaha }: TKategoriUsahaSetahun = data.data;
    setKategoriUsahaPertahun(dataKategoriUsaha, tahun, dpp);
  }, [data]);

  return {
    kategoriUsahaError: error,
    isKategoriUsahaLoading: isLoading
  }
}

export default useInitDataKategoriUsaha