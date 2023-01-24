import React, { useMemo } from 'react'
import { TBarData } from './index.types';
import computeOptions from './options';
import { ChartData } from 'chart.js';

const useData = (labels: string[], dataset: TBarData[]) => {
  const options = useMemo(() => computeOptions(labels), [labels]);
  const datasets = useMemo(() => {
    return dataset.map(item => ({
      ...item,
      barPercentage: 0.6,
      categoryPercentage: 0.5,
    }))
  }, [dataset]);

  const data: ChartData<"bar", number[], string> = useMemo(
    () => ({ labels, datasets }),
    [labels, datasets]
  );
  
  return { options, data }
}

export default useData