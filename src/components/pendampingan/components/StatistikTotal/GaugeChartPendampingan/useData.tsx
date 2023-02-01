import React, { useMemo } from 'react'
import useStore from '../../../state/store'
import { TGaugeLegendItem } from '../../../../reusables/organisms/GaugeChart';
import { ChartData } from 'chart.js';

interface ReturnValue {
  percent: number;
  data: ChartData<"doughnut", number[], string>;
  legendItems: TGaugeLegendItem[];
}

const useData = (): ReturnValue => {
  const {
    totalSudah,
    totalBelum
  } = useStore(state => state.statistikTotal);

  const percent: number = useMemo(() => {
    const total = totalSudah + totalBelum;
    const result = Math.floor((totalSudah * 100) / total);
    return result;
  }, [totalSudah, totalBelum]);

  const data = useMemo(() => ({
    labels: ["Sudah", "Belum"],
    datasets: [{
      label: "Jumlah",
      data: [totalSudah, totalBelum],
      backgroundColor: ["#CFAE6B", "#0D1D37"],
      borderColor: "#CFAE6B",
      borderWidth: 1
    }]
  }), [totalSudah, totalBelum]);

  const legendItems: TGaugeLegendItem[] = useMemo(() => [
    { 
      label: "PENDAMPINGAN YANG SUDAH",
      value: totalSudah,
      color: "#EAC170"
     },
     { 
      label: "PENDAMPINGAN YANG BELUM",
      value: totalBelum,
      color: "#0D1D37"
     }
  ], [totalSudah, totalBelum])

  return { percent, data, legendItems }
}

export default useData