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
import useOptions from './useOptions';
import useData from './useData';
import { TBarData } from '../BarChart/index.types';
import { Heading } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  title: string | React.ReactNode;
  labels: string[];
  datasets: TBarData[];
  width: string;
  height: string;
  fontSize?: number;
  fontWeight?: number;
}

const StackedBarChart: React.FC<Props> = ({
  title, labels, datasets, width, height,
  fontSize = 12,
  fontWeight = 600
}) => {
  const data = useData(labels, datasets);
  const options = useOptions({
    labels,
    fontSize,
    fontWeight
  })

  return (
    <div>
      <Heading
        textAlign="center"
        fontFamily="Montserrat"
        fontSize="13px"
        fontWeight={600}
        lineHeight="20px"
        textTransform="uppercase"
      >
        { title }
      </Heading>
      <Bar
        options={ options }
        data={ data }
        width={ width }
        height={ height }
      />
    </div>
  )
}

export default StackedBarChart