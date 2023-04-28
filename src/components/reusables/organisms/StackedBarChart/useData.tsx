import { ChartData } from 'chart.js';
import React, { useMemo } from 'react'
import { TBarData } from '../BarChart/index.types';

const useData = (labels: string[], datasets: TBarData[]) => {
  const data: ChartData<"bar", number[], string> = useMemo(() => {
    return { labels, datasets }
  }, [labels, datasets]);

  return data;
}

export default useData;