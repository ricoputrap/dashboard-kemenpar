import React, { useEffect, useMemo } from 'react'
import { TGenderData } from '../../../reusables/organisms/DoughnutChartPeserta/types/legends.types'
import useStatistikStore from '../../state/statistik/store';
import useSosialisasiStore from '../../state/store';
import { TStatistikPesertaPertahun } from '../../state/statistik/index.types';
import { TStatistikTotal } from '../../types/statistik.types';
import { TStatistikPeserta } from '../../../reusables/organisms/StatistikPeserta/index.types';

interface ReturnValue {
  menData: TGenderData;
  womenData: TGenderData;
}

const useDataStatistikTotal = (): ReturnValue => {
  const statistikPesertaPertahun: TStatistikPesertaPertahun = useStatistikStore(
    state => state.statistikPesertaPertahun)
  ;
  const statistikTotal: TStatistikTotal = useStatistikStore(
    state => state.statistikTotal
  );
  const setStatistikTotal = useStatistikStore(state => state.setStatistikTotal);
  const tahun: number = useSosialisasiStore(state => state.tahun);

  useEffect(() => {
    const statistik: TStatistikPeserta[] = statistikPesertaPertahun[tahun];
    if (!statistik) {
      setStatistikTotal({
        totalPeserta: 0,
        totalLaki: 0,
        totalPerempuan: 0
      });
    }
    else {
      const initialStatistikTotal: TStatistikTotal = {
        totalPeserta: 0,
        totalLaki: 0,
        totalPerempuan: 0
      }
      const updatedStatistikTotal: TStatistikTotal = statistik.reduce(
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
      )

      setStatistikTotal(updatedStatistikTotal);
    }
  }, [statistikPesertaPertahun, tahun])

  // compute data
  const { menData, womenData }: ReturnValue = useMemo(() => {
    const totalLaki = statistikTotal.totalLaki;
    const totalPerempuan = statistikTotal.totalPerempuan;

    const percentLaki = totalLaki > 0
      ? Math.ceil((totalLaki * 100) / (totalLaki + totalPerempuan))
      : 0;
    const percentPerempuan = totalPerempuan > 0
      ? Math.floor((totalPerempuan * 100) / (totalLaki + totalPerempuan))
      : 0;

    const menData: TGenderData = {
      value: totalLaki,
      percent: percentLaki,
      label: "laki-laki",
      color: "#00FFFF"
    }

    const womenData: TGenderData = {
      value: totalPerempuan,
      percent: percentPerempuan,
      label: "perempuan",
      color: "#FF1F00"
    }

    return { menData, womenData }
  }, [statistikTotal]);

  return { menData, womenData }
}

export default useDataStatistikTotal