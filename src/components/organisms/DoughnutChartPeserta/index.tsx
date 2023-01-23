import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../assets/lines/chart-line.svg"
import Legends from './Legends'
import { TGenderData } from './types/legends.types'
import styles from "./DoughnutChartPeserta.module.css"
import DoughnutChartContainer from '../DoughnutChart/DoughnutChartContainer'

interface Props {
  title: string;
  menData: TGenderData;
  womenData: TGenderData;
}

const DoughnutChartPeserta: React.FC<Props> = ({ title, menData, womenData }) => {
  const chartData: TGenderData[] = [menData, womenData];
  
  return (
    <Box>
      {/* CHART HEADER LINE */}
      <Image
        src={ ChartLine }
        width="100%"
      />

      <Flex columnGap="44px">

        {/* CHART */}
        <Box className={ styles.chartContainer }>
          <DoughnutChartContainer
            data={ chartData }
            label="Jumlah Peserta"
          />
          <Text className={ styles.title }>
            { title }
          </Text>
        </Box>

        <Legends
          menData={ menData }
          womenData={ womenData }
        />
      </Flex>
    </Box>
  )
}

export default DoughnutChartPeserta