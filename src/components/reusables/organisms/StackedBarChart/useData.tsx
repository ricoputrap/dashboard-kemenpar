import { ChartData } from 'chart.js';
import React, { useMemo } from 'react'
import { TBarData } from '../BarChart/index.types';

const useData = (labels: string[], datasets: TBarData[]) => {
  const data: ChartData<"bar", number[], string> = useMemo(() => {
    const styledDatasets = datasets.map(item => ({
      ...item,
      barPercentage: 0.6,
    }));

    return { labels, datasets: styledDatasets }
  }, [labels, datasets]);

  return data;
}

export default useData;