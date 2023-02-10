import React, { useMemo } from 'react'
import useStatistikStore from '../../state/statistik/store'
import { TStatistikTotal } from '../../types/statistik.types';
import { TStatistikPeserta } from '../../../reusables/organisms/StatistikPeserta/index.types';
import useSosialisasiStore from '../../state/store';

interface ReturnValue {
  statistikPeserta: TStatistikPeserta[];
  statistikTotal: TStatistikTotal;
}

const useDataStatistik = (): ReturnValue => {
  const statistikPesertaPertahun = useStatistikStore(state => state.statistikPesertaPertahun);
  const statistikTotal = useStatistikStore(state => state.statistikTotal);
  const tahun = useSosialisasiStore(state => state.tahun);

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