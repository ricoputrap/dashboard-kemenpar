import React, { useEffect } from 'react'
import API from '../../../API';
import useUsiaStore from '../state/usia/store';
import useUsiaPendidikanStore from '../state/usiaPendidikan/store';
import usePendidikanStore from '../state/pendidikan/store';
import useSosialisasiStore from '../state/store';

interface ReturnValue {
  usiaPendidikanError: any;
  isUsiaPendidikanLoading: boolean;
}

const useInitDataUsiaPendidikan = (): ReturnValue => {
  const tahun = useSosialisasiStore(state => state.tahun);
  const lokasi = useUsiaPendidikanStore(state => state.lokasi);

  const { data, error, isLoading } = API.sosialisasi.usiaPendidikan(tahun, lokasi);

  const setUsiaPertahun = useUsiaStore(state => state.setUsiaPertahun);
  const setPendidikan = usePendidikanStore(action => action.setPendidikan);
  const setLokasi = useUsiaPendidikanStore(state => state.setLokasi);

  useEffect(() => {
    if (!data) return;

    const { dpp, usia, pendidikan } = data.data;

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