import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import computeOptions from './options';
import { TBarData } from './index.types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  width: string;
  height: string;
  labels: string[];
  dataset: TBarData[];
}

const BarChart: React.FC<Props> = ({ width, height, labels, dataset }) => {
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

  return (
    <Bar
      options={options}
      data={ data }
      width={ width }
      height={ height }
    />
  )
}

export default BarChart