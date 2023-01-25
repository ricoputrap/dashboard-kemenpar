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
import { TBarData, TLegendItem } from './index.types';
import useData from './useData';
import ChartLine from "../../../assets/lines/chart-line.svg"
import styles from "./BarChart.module.css";
import useOptions from './useOptions';
import Legends from './Legends';
import useLegends from './Legends/useLegends';

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
  showLegends?: boolean;
  showGrid?: boolean;
}

const BarChart: React.FC<Props> = ({
  title, width, height, labels, dataset,
  showLegends = false,
  showGrid = false
}) => {
  const options = useOptions(labels, showGrid);
  const { data } = useData(labels, dataset);
  const legends: TLegendItem[] = useLegends(dataset, showLegends);

  return (
    <Flex direction="column" rowGap="12px">
      <Image src={ ChartLine } width="390px" />
      
      <Flex justifyContent="space-between">
        <Text className={ styles.title }>
          { title }
        </Text>

        {!!showLegends && <Legends data={ legends } />}
      </Flex>

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