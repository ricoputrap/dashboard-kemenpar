import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import options from './options';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: ChartData<"doughnut", number[], string>,
}

const GaugeChart: React.FC<Props> = ({ data }) => {
  return (
    <Doughnut data={ data } options={ options } />
  )
}

export default GaugeChart