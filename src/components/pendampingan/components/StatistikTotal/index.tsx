import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

import useDataStatistikTotal from '../../hooks/useDataStatistikTotal'
import ChartLine from "../../../../assets/lines/chart-line.svg";
import styles from "./StatistikTotal.module.css";

const StatistikTotal: React.FC = () => {
  const {
    totalDesa,
    totalBelum,
    totalSudah
  } = useDataStatistikTotal();

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
      <Text>Percent: 0%</Text>
      <Text>Sudah: { totalSudah }</Text>
      <Text>Belum: { totalBelum }</Text>
    </Flex>
  )
}

export default StatistikTotal