import React, { useEffect } from 'react'
import useNarasumberStore from '../state/store';
import API from '../../../API';
import { TJumlahTotal, TKomposisiItem, TTopNarasumber } from '../state/index.types';

interface ReturnValue {
  jumlahError: any;
  isJumlahLoading: boolean;
}

const useInitDataJumlah = (): ReturnValue => {
  const setJumlahTotal = useNarasumberStore(state => state.setJumlahTotal);
  const setKomposisi = useNarasumberStore(state => state.setKomposisi);
  const setTopList = useNarasumberStore(state => state.setTopList);

  const { data, error, isLoading } = API.narasumber.jumlah();

  useEffect(() => {
    if (!data) return;

    const { totalLaki, totalPerempuan }: TJumlahTotal = data.data.total;
    const komposisi: TKomposisiItem[] = data.data.komposisi;
    const topList: TTopNarasumber[] = data.data.topList;

    setJumlahTotal(totalLaki, totalPerempuan);
    setKomposisi(komposisi);
    setTopList(topList);
  }, [data]);

  return {
    jumlahError: error,
    isJumlahLoading: isLoading
  }
}

export default useInitDataJumlah