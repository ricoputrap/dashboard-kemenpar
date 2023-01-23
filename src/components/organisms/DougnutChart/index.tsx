import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';
import styles from "./DougnutChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data: ChartData<"doughnut", number[], string> = {
  labels: ['Perempuan', 'Laki-laki'],
  datasets: [
    {
      label: 'Jumlah Peserta',
      data: [70, 30],
      backgroundColor: [
        '#FF1F00',
        '#00FFFF'
      ],
      borderColor: [
        '#FF1F00',
        '#00FFFF'
      ],
      borderWidth: 1,
      rotation: 0
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  cutout: 55
}

const DougnutChart: React.FC = () => {
  return (
    <Box className={ styles.container }>
      <Doughnut data={ data } options={ options } />
      
      <Box className={ styles.subcontainer }>
        <Text className={ styles.number }>
          975
        </Text>
      </Box>
    </Box>
  )
}

export default DougnutChart