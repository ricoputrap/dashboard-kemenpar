import React, { useEffect, useMemo } from 'react'
import useStatistikStore from '../../state/statistik/store'
import { TStatistikPeserta, TStatistikTotal } from '../../types/statistik.types';

interface ReturnValue {
  statistikPeserta: TStatistikPeserta[];
  statistikTotal: TStatistikTotal;
}

const useDataStatistik = (): ReturnValue => {
  const {
    tahun,
    statistikPesertaPertahun,
    statistikTotal
  } = useStatistikStore();

  const statistikPeserta: TStatistikPeserta[] = useMemo(() => {
    const tahuns: string[] = Object.keys(statistikPesertaPertahun);
    if (tahuns.includes(tahun.toString()))
      return statistikPesertaPertahun[tahun];

    return [];
  }, [tahun, statistikPesertaPertahun]);

  return {
    statistikPeserta,
    statistikTotal
  }
}

export default useDataStatistik