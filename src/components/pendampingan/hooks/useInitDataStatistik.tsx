import React, { useEffect } from 'react'
import API from '../../../API'
import useStore from '../state/store';
import { TDataStatistikTotal } from '../state/index.types';
import { TStatistikPendampingan } from '../types/statistik.types';
import { initialStatistikTotal } from '../state/initialData';

interface TReturnValue {
  isStatistikError: any;
  isStatistikLoading: boolean;
}

/**
 * Custom hook for preparing initial data of Statistik Pendampingan
 * fetched from the server.
 */
const useInitDataStatistik = (): TReturnValue => {
  const { data, error, isLoading } = API.pendampinganStatistik();
  const setDataStatistik = useStore((state) => state.setDataStatistik);
  const setDataStatistikTotal = useStore((state) => state.setDataStatistikTotal);

  useEffect(() => {
    if (!data) return;

    const totalDesa: number = data.data.totalDesa;
    const statistikPendampingan: TStatistikPendampingan[] = data.data.statistik;

    // compute data statistik total 
    const statistikTotal: TDataStatistikTotal = statistikPendampingan.reduce(
      (total: TDataStatistikTotal, stat: TStatistikPendampingan) => {
        return {
          totalDesa,
          totalBelum: total.totalBelum + stat.belum,
          totalSudah: total.totalSudah + stat.sudah
        }
      }, initialStatistikTotal);

    setDataStatistik(statistikPendampingan);
    setDataStatistikTotal(statistikTotal);
  }, [data]);

  return {
    isStatistikError: error,
    isStatistikLoading: isLoading
  }
}

export default useInitDataStatistik;