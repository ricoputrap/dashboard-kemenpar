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
import { Flex, Image, Text } from '@chakra-ui/react';
import { TBarData } from './index.types';
import useData from './useData';
import ChartLine from "../../../assets/lines/chart-line.svg"
import styles from "./BarChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  title: string;
  width: string;
  height: string;
  labels: string[];
  dataset: TBarData[];
}

const BarChart: React.FC<Props> = ({ title, width, height, labels, dataset }) => {
  const { options, data } = useData(labels, dataset);

  return (
    <Flex direction="column" rowGap="12px">
      <Image src={ ChartLine } width="390px" />
      <Text className={ styles.title }>
        { title }
      </Text>
      <Bar
        options={ options }
        data={ data }
        width={ width }
        height={ height }
      />
    </Flex>
  )
}

export default BarChart