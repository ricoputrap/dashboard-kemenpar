import React, { useMemo } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';
import styles from "./DougnutChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
}

interface Props {
  data: ChartData<"doughnut", number[], string>,
  value: number,
  width?: number;
  fontSize?: number;
  thickness?: number;
}

const DougnutChart: React.FC<Props> = ({
  data,
  value,
  width = 155,
  fontSize = 40,
  thickness = 55
}) => {
  const doughnutOptions = useMemo(() => ({
    ...options,
    cutout: thickness
  }), [thickness])

  return (
    <Box position="relative" width={`${width}px`}>
      <Doughnut data={ data } options={ doughnutOptions } />
      
      <Box className={ styles.subcontainer }>
        <Text fontSize={`${fontSize}px`} fontWeight={400}>
          { value }
        </Text>
      </Box>
    </Box>
  )
}

export default DougnutChart