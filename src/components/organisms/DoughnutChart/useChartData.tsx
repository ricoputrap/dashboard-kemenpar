import React, { useEffect, useState } from 'react'
import { TGenderData } from '../DoughnutChartPeserta/types/legends.types'
import { ChartData } from 'chart.js';

const initialData: ChartData<"doughnut", number[], string> = {
  labels: [],
  datasets: []
}

const useChartData = (data: TGenderData[], label: string) => {
  const [chartData, setChartData] = useState<ChartData<"doughnut", number[], string>>(initialData);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const dataValues: number[] = data.map(item => item.value).reverse();
    const colors: string[] = data.map(item => item.color).reverse();
    const labels: string[] = data.map(item => {
      return item.label.charAt(0).toUpperCase() + item.label.slice(1);
    }).reverse();

    const computedChartData: ChartData<"doughnut", number[], string> = {
      labels,
      datasets: [
        {
          label,
          data: dataValues,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
        }
      ]
    }

    const totalValues: number = dataValues.reduce((total, val) => total + val, 0);

    setChartData(computedChartData);
    setValue(totalValues);
  }, [data]);


  return { chartData, value };
}

export default useChartData