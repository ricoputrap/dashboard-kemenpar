import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../assets/lines/chart-line.svg"
import DougnutChart from '../DougnutChart'
import Legends from './Legends'
import { TGenderData } from './types/legends.types'
import styles from "./DoughnutChartPeserta.module.css"

const menData: TGenderData = {
  value: 60,
  percent: 30,
  label: "laki-laki",
  color: "#00FFFF"
}

const womenData: TGenderData = {
  value: 170,
  percent: 70,
  label: "perempuan",
  color: "#FF1F00"
}

const DoughnutChartPeserta: React.FC = () => {
  return (
    <Box>
      <Image src={ ChartLine } width="100%" />

      <Flex columnGap="44px">

        {/* CHART */}
        <Box className={ styles.chartContainer }>
          <DougnutChart />
          <Text className={ styles.title }>
            Peserta Sosialisasi
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