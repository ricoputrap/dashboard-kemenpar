import React, { useMemo } from 'react'
import { Flex, Text } from '@chakra-ui/react';

import { TStatistikPendampingan } from '../../types/statistik.types'
import { Container, JumlahBox, LocationBox, PercentageBox } from './index.styles';

const StatistikItem: React.FC<TStatistikPendampingan> = ({
  lokasi,
  belum,
  sudah
}) => {
  const percentage: number = useMemo(() => {
    const total: number = belum + sudah;
    const percent: number = Math.ceil(sudah * 100 / total);
    return percent;
  }, [belum, sudah]);
  
  return (
    <Container>
      <LocationBox>
        <Text>
          { lokasi }
        </Text>
      </LocationBox>

      {/* Percentase Pendampingan */}
      <PercentageBox>
        <Flex alignItems="baseline" justifyContent="center">
          <Text className="percentage__value">{ percentage }</Text>
          <Text className="percentage__label">%</Text>
        </Flex>
        <Text className="percentage__name">
          Pendampingan
        </Text>
      </PercentageBox>

      <Flex>
        {/* Jumlah Sudah */}
        <JumlahBox>
          <Text className="jumlah__value">{ sudah }</Text>
          <Text className="jumlah__label">Sudah</Text>
        </JumlahBox>

        {/* Jumlah Belum */}
        <JumlahBox borderLeft="1px solid #EAC170">
          <Text className="jumlah__value">{ belum }</Text>
          <Text className="jumlah__label">Belum</Text>
        </JumlahBox>
      </Flex>
    </Container>
  )
}

export default StatistikItem