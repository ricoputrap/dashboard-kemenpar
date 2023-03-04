import React from 'react'
import { TGenderData } from '../DoughnutChartPeserta/types/legends.types'
import useChartData from './useChartData';
import DougnutChart from '.';

interface Props {
  data: TGenderData[];
  label: string;
  width?: number;
  fontSize?: number;
  thickness?: number;
}

const DoughnutChartContainer: React.FC<Props> = ({
  data, label, width, fontSize, thickness
}) => {
  const { chartData, value } = useChartData(data, label);

  return (
    <DougnutChart
      data={ chartData }
      value={ value }
      width={ width }
      fontSize={ fontSize }
      thickness={ thickness }
    />
  )
}

export default DoughnutChartContainer