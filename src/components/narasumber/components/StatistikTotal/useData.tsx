import React, { useMemo } from 'react'
import { TGenderData } from '../../../reusables/organisms/DoughnutChartPeserta/types/legends.types'
import useNarasumberStore from '../../state/store';

interface ReturnValue {
  menData: TGenderData;
  womenData: TGenderData;
}

const useData = (): ReturnValue => {
  const jumlahTotal = useNarasumberStore(state => state.jumlahTotal);

  const [menData, womenData]: TGenderData[] = useMemo(() => {
    const { totalLaki, totalPerempuan } = jumlahTotal;
    const total = totalLaki + totalPerempuan;

    const men: TGenderData = {
      value: totalLaki,
      percent: Math.floor((totalLaki * 100) / total),
      label: "laki-laki",
      color: "#00FFFF"
    }

    const women: TGenderData = {
      value: jumlahTotal.totalPerempuan,
      percent: Math.ceil((totalPerempuan * 100) / total),
      label: "perempuan",
      color: "#FF1F00"
    }

    return [men, women]
  }, [jumlahTotal]);

  return { menData, womenData }
}

export default useData