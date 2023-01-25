import React, { useMemo } from 'react'
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
import LegendItem from './LegendItem';

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
}

const BarChart: React.FC<Props> = ({
  title, width, height, labels, dataset,
  showLegends = false
}) => {
  const { options, data } = useData(labels, dataset);

  const legends: TLegendItem[] = useMemo(() => {
    return dataset.map(item => ({
      label: item.label,
      color: item.backgroundColor
    }));
  }, [dataset]);

  return (
    <Flex direction="column" rowGap="12px">
      <Image src={ ChartLine } width="390px" />
      
      <Flex justifyContent="space-between">
        <Text className={ styles.title }>
          { title }
        </Text>

        {!!showLegends && <Flex columnGap="20px">
          {legends.map(item => (
            <LegendItem
              label={ item.label }
              color={ item.color }
            />
          ))}
        </Flex>}
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