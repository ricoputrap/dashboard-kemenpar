import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

import ChartLine from "../../../../assets/lines/chart-line.svg";
import styles from "./StatistikTotal.module.css";
import GaugeChartPendampingan from './GaugeChartPendampingan';
import useStore from '../../state/store';


const StatistikTotal: React.FC = () => {
  const totalDesa = useStore(state => state.statistikTotal.totalDesa);

  return (
    <Flex direction="column" rowGap="12px">
      <Image src={ ChartLine } width="100%" />

      {/* title */}
      <Flex alignItems="center" columnGap="15px">
        <Text className={ styles.totalDesaValue }>
          { totalDesa }
        </Text>

        <Text className={ styles.totalDesaLabel }>
          Jumlah Desa Wisata
        </Text>
      </Flex>

      {/* gauge chart */}
      <GaugeChartPendampingan />
    </Flex>
  )
}

export default StatistikTotal