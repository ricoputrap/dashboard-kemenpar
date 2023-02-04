import React, { useEffect } from 'react'
import API from '../../../API';
import useUsiaStore from '../state/usia/store';
import useUsiaPendidikanStore from '../state/usiaPendidikan/store';

interface ReturnValue {
  usiaPendidikanError: any;
  isUsiaPendidikanLoading: boolean;
}

const useInitDataUsiaPendidikan = (): ReturnValue => {
  const { data, error, isLoading } = API.sosialisasi.usiaPendidikan();

  const setUsiaPertahun = useUsiaStore(state => state.setUsiaPertahun);
  const { setTahun, setLokasi } = useUsiaPendidikanStore();

  useEffect(() => {
    if (!data) return;

    const { tahun, dpp, usia, pendidikan } = data.data;

    setTahun(tahun);
    setLokasi(dpp);
    setUsiaPertahun(usia, tahun, dpp);
  }, [data]);

  return {
    usiaPendidikanError: error,
    isUsiaPendidikanLoading: isLoading
  }
}

export default useInitDataUsiaPendidikan