import React from 'react'
import useStore from '../state/store'
import { TPendampinganDesa } from '../types/laporan.types';

const useDataLaporan = () => {
  const activeDPP: string = useStore(state => state.activeDPP);
  const dataPendampinganPerDesa: TPendampinganDesa[] = useStore(
    (state) => state.getDataPendampinganByDPP(activeDPP)
  );

  return dataPendampinganPerDesa;
}

export default useDataLaporan