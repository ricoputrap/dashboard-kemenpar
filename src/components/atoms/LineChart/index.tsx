import React from 'react'
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { labels, options } from './config';
import datasets from './datasets';
import { Box } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,  // x-axis
  LinearScale,    // y-axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = { labels, datasets };

const LineChart: React.FC = () => {
  return (
    <Box width={1000}>
      <Line
        options={ options }
        data={ data }
        height="200px"
        width="1000px"
      />
    </Box>
  )
}

export default LineChart