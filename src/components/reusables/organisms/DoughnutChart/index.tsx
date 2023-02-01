import React from 'react'
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
  },
  cutout: 55
}

interface Props {
  data: ChartData<"doughnut", number[], string>,
  value: number
}

const DougnutChart: React.FC<Props> = ({ data, value }) => {
  return (
    <Box className={ styles.container }>
      <Doughnut data={ data } options={ options } />
      
      <Box className={ styles.subcontainer }>
        <Text className={ styles.number }>
          { value }
        </Text>
      </Box>
    </Box>
  )
}

export default DougnutChart