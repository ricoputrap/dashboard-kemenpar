import React, { useEffect } from 'react'
import useMateriStore from '../state/store';
import API from '../../../../API';

interface ReturnValue {
  materiError: any;
  isMateriLoading: boolean;
}

const useInitDataMateri = (): ReturnValue => {
  const setMateriPertahun = useMateriStore(state => state.setMateriPertahun)
  const jenisMateri = useMateriStore(state => state.jenisMateri);
  const tahun = 2022;

  const { data, error, isLoading } = API.pelatihan.materi(tahun, jenisMateri);

  useEffect(() => {
    if (!data) return;

    const { tahun, pelatihan, materi } = data.data;
    setMateriPertahun(materi, tahun, pelatihan);
  }, [data]);

  return {
    materiError: error,
    isMateriLoading: isLoading
  }
}

export default useInitDataMateri