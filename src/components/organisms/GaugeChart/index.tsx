import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import options from './options';
import { BoxChart, ChartPercent, ChartTitle, Container } from './index.styles';
import Legends from './Legends';

ChartJS.register(ArcElement, Tooltip, Legend);

export type TGaugeLegendItem = {
  label: string;
  value: number;
  color: string;
}

interface Props {
  data: ChartData<"doughnut", number[], string>;
  title?: string;
  percent?: number;
  legend?: TGaugeLegendItem[];
}

const GaugeChart: React.FC<Props> = ({ data, title, percent, legend }) => {
  return (
    <Container>
      <BoxChart>
        <Doughnut data={ data } options={ options } />

        {(percent !== undefined) && (
          <ChartPercent>
            { percent }%
          </ChartPercent>
        )}

        <ChartTitle>
          { title }
        </ChartTitle>
      </BoxChart>

      {/* LEGEND */}
      {!!legend && (
        <Legends data={ legend } />
      )}
    </Container>
  )
}

export default GaugeChart