import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react';

import { TStatistikPendampingan } from '../../types/statistik.types'
import useStore from '../../state/store'
import ChartLine from "../../../../assets/lines/chart-line.svg";
import styles from "./Statistik.module.css";
import StatistikItem from '../StatistikItem';

const Statistik: React.FC = () => {
  const statistikSemuaLokasi: TStatistikPendampingan[] = useStore(
    (state) => state.statistikPendampingan
  );

  return (
    <Flex direction="column" rowGap="24px">
      <Flex columnGap="16px">
        <Image src={ ChartLine } />
        <Text className={ styles.title }>
          Statistik Pendampingan Berdasarkan Desa 
        </Text>
      </Flex>

      <Flex gap="15px">
        {statistikSemuaLokasi.map(stat => (
          <StatistikItem
            key={ stat.lokasi }
            lokasi={ stat.lokasi }
            belum={ stat.belum }
            sudah={ stat.sudah }
          />
        ))}
      </Flex>

      <Flex columnGap="16px">
        <Image src={ ChartLine } />
        <Text className={ styles.title }>
          Laporan Pendampingan Berdasarkan Desa 
        </Text>
      </Flex>
    </Flex>
  )
}

export default Statistik