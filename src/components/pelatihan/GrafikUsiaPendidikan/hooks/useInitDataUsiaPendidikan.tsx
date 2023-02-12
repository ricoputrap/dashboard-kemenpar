import React, { useEffect } from 'react'
import useUsiaPendidikanStore from '../state/store'
import API from '../../../../API';

interface ReturnValue {
  usiaPendidikanError: any;
  isUsiaPendidikanLoading: boolean;
}

const useInitDataUsiaPendidikan = (): ReturnValue => {
  const setUsiaPertahun = useUsiaPendidikanStore(state => state.setUsiaPertahun);
  const setPendidikanPertahun = useUsiaPendidikanStore(state => state.setPendidikanPertahun);
  const lokasi = useUsiaPendidikanStore(state => state.lokasi);
  const tahun = 2022;

  const { data, error, isLoading } = API.pelatihan.usiaPendidikan(tahun, lokasi);

  useEffect(() => {
    if (!data) return;

    const { dpp, usia, pendidikan } = data.data;

    setUsiaPertahun(usia, tahun, lokasi);
    setPendidikanPertahun(pendidikan, tahun, lokasi);
  }, [data]);

  return {
    usiaPendidikanError: "",
    isUsiaPendidikanLoading: true
  }
}

export default useInitDataUsiaPendidikan