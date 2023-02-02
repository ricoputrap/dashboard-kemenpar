import React, { useEffect } from 'react'
import API from '../../../API';
import useStatistikStore from '../state/statistik/store';
import { TStatistikPesertaPertahun } from '../../../API/sosialisasi';
import { TStatistikPeserta, TStatistikTotal } from '../types/statistik.types';
import { initialStatistikTotal } from '../state/statistik/initialData';

interface TReturnValue {
  isStatistikError: any;
  isStatistikLoading: boolean;
}

/**
 * Custom hook for preparing initial data of Statistik Jumlah Peserta
 * Sosialisasi per DPP
 */
const useInitDataStatistik = (): TReturnValue => {
  const { data, error, isLoading } = API.sosialisasi.statistik();
  const {
    setStatistikPesertaPertahun,
    setStatistikTotal
  } = useStatistikStore();

  useEffect(() => {
    if (!data) return;

    const { tahun, statistik }: TStatistikPesertaPertahun = data.data;

    // compute data statistik total
    const statistikTotal: TStatistikTotal = statistik.reduce(
      (total: TStatistikTotal, stat: TStatistikPeserta) => {
        const jumlahLaki: number = stat.laki;
        const jumlahPerempuan: number = stat.perempuan;
        const jumlahTotal: number = jumlahLaki + jumlahPerempuan;

        return {
          totalPeserta: total.totalPeserta + jumlahTotal,
          totalLaki: total.totalLaki + jumlahLaki,
          totalPerempuan: total.totalPerempuan + jumlahPerempuan
        }
      },
      initialStatistikTotal
    );

    // update states
    setStatistikPesertaPertahun(statistik, tahun);
    setStatistikTotal(statistikTotal);
  }, [data]);

  return {
    isStatistikError: error,
    isStatistikLoading: isLoading
  }
}

export default useInitDataStatistik