import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const data: ChartData<"doughnut", number[], string> = {
  labels: ['Laki-laki', 'Perempuan'],
  datasets: [
    {
      label: '# of Votes',
      data: [30, 75],
      backgroundColor: [
        '#00FFFF',
        '#FF1F00'
      ],
      borderColor: [
        '#00FFFF',
        '#FF1F00'
      ],
      borderWidth: 1
    },
  ],
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
    <Box width="155px" position="relative">
      <Doughnut data={data} options={ options } />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Text fontSize="48px" fontWeight={400}>
          975
        </Text>
      </Box>
    </Box>
  )
}

export default DougnutChart