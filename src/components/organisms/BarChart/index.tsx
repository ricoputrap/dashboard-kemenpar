import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { TBarData } from './index.types';
import useData from './useData';

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
  const { options, data } = useData(labels, dataset);

  return (
    <Bar
      options={ options }
      data={ data }
      width={ width }
      height={ height }
    />
  )
}

export default BarChart