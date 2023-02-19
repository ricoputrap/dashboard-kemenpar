import React, { useEffect } from 'react'
import useNarasumberStore from '../state/store';
import API from '../../../API';
import { TJumlahTotal } from '../state/index.types';

interface ReturnValue {
  jumlahError: any;
  isJumlahLoading: boolean;
}

const useInitDataJumlah = (): ReturnValue => {
  const setJumlahTotal = useNarasumberStore(state => state.setJumlahTotal);

  const { data, error, isLoading } = API.narasumber.jumlah();

  useEffect(() => {
    if (!data) return;

    const { totalLaki, totalPerempuan }: TJumlahTotal = data.data.total;

    setJumlahTotal(totalLaki, totalPerempuan);
  }, [data]);

  return {
    jumlahError: error,
    isJumlahLoading: isLoading
  }
}

export default useInitDataJumlah