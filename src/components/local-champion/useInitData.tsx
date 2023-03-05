import React, { useEffect } from 'react'
import useChampionStore from './state/store'
import API from '../../API';
import { TLaporanPerDesa } from './state/index.types';

interface ReturnValue {
  championError: any;
  isChampionLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const activeDPP: string = useChampionStore(state => state.activeDPP);
  const setLaporanPerDPP = useChampionStore(state => state.setLaporanPerDPP);

  const { data, error, isLoading } = API.localChampion(activeDPP);

  useEffect(() => {
    if (!data) return;
    
    const dataSetahun: TLaporanPerDesa[] = data.data;
    setLaporanPerDPP(activeDPP, dataSetahun);
  }, [data]);

  return {
    championError: error,
    isChampionLoading: isLoading
  }
}

export default useInitData