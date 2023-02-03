import React, { useMemo } from 'react'
import { TGenderData } from '../../../reusables/organisms/DoughnutChartPeserta/types/legends.types'
import useStatistikStore from '../../state/statistik/store';

interface ReturnValue {
  menData: TGenderData;
  womenData: TGenderData;
}

const useDataStatistikTotal = (): ReturnValue => {
  const { statistikTotal } = useStatistikStore();

  // compute data
  const { menData, womenData }: ReturnValue = useMemo(() => {
    const totalLaki = statistikTotal.totalLaki;
    const totalPerempuan = statistikTotal.totalPerempuan;

    const percentLaki = Math.ceil((totalLaki * 100) / (totalLaki + totalPerempuan));
    const percentPerempuan = Math.floor((totalPerempuan * 100) / (totalLaki + totalPerempuan));

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