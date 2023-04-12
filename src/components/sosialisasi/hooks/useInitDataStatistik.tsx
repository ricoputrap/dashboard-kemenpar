import React, { useEffect } from 'react'
import API from '../../../API';
import useStatistikStore from '../state/statistik/store';
import { TStatistikPesertaPertahun } from '../../../API/sosialisasi';
import { TStatistikTotal } from '../types/statistik.types';
import { TStatistikPeserta } from '../../reusables/organisms/StatistikPeserta/index.types';
import { initialStatistikTotal } from '../state/statistik/initialData';
import useSosialisasiStore from '../state/store';

interface TReturnValue {
  statistikError: any;
  isStatistikLoading: boolean;
}

/**
 * Custom hook for preparing initial data of Statistik Jumlah Peserta
 * Sosialisasi per DPP
 */
const useInitDataStatistik = (): TReturnValue => {
  const setStatistikPesertaPertahun = useStatistikStore(state => state.setStatistikPesertaPertahun);
  const setStatistikTotal = useStatistikStore(state => state.setStatistikTotal);
  const tahun = useSosialisasiStore(state => state.tahun);

  const { data, error, isLoading } = API.sosialisasi.statistik(tahun);

  useEffect(() => {
    if (!data) return;

    const { tahun, statistik }: TStatistikPesertaPertahun = data.data;

    // preprocess: rename "labuan_bajo" to "l. bajo"
    const statistikPreprocessed: TStatistikPeserta[] = statistik.map(stat => {
      const { lokasi } = stat;
      const dppPreprocessed = lokasi === 'labuan_bajo' ? 'l. bajo' : lokasi;
      return { ...stat, lokasi: dppPreprocessed };
    });

    // compute data statistik total
    const statistikTotal: TStatistikTotal = statistikPreprocessed.reduce(
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
    setStatistikPesertaPertahun(statistikPreprocessed, tahun);
    setStatistikTotal(statistikTotal);
  }, [data]);

  return {
    statistikError: error,
    isStatistikLoading: isLoading
  }
}

export default useInitDataStatistik