import React, { useEffect } from 'react'
import API from '../../../API';
import useUsiaStore from '../state/usia/store';
import useUsiaPendidikanStore from '../state/usiaPendidikan/store';
import usePendidikanStore from '../state/pendidikan/store';

interface ReturnValue {
  usiaPendidikanError: any;
  isUsiaPendidikanLoading: boolean;
}

const useInitDataUsiaPendidikan = (): ReturnValue => {
  const { data, error, isLoading } = API.sosialisasi.usiaPendidikan();

  const setUsiaPertahun = useUsiaStore(state => state.setUsiaPertahun);
  const setPendidikan = usePendidikanStore(action => action.setPendidikan);
  const setTahun = useUsiaPendidikanStore(state => state.setTahun);
  const setLokasi = useUsiaPendidikanStore(state => state.setLokasi);

  useEffect(() => {
    if (!data) return;

    const { tahun, dpp, usia, pendidikan } = data.data;

    setTahun(tahun);
    setLokasi(dpp);
    setUsiaPertahun(usia, tahun, dpp);
    setPendidikan(pendidikan, tahun, dpp);
  }, [data]);

  return {
    usiaPendidikanError: error,
    isUsiaPendidikanLoading: isLoading
  }
}

export default useInitDataUsiaPendidikan