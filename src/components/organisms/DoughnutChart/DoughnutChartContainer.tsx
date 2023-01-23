import React from 'react'
import { TGenderData } from '../DoughnutChartPeserta/types/legends.types'
import useChartData from './useChartData';
import DougnutChart from '.';

interface Props {
  data: TGenderData[];
  label: string;
}

const DoughnutChartContainer: React.FC<Props> = ({ data, label }) => {
  const { chartData, value } = useChartData(data, label);

  return (
    <DougnutChart
      data={ chartData }
      value={ value }
    />
  )
}

export default DoughnutChartContainer