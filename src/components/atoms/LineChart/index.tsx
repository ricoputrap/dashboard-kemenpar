import React, { useEffect } from 'react'
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Point,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { options } from './config';
import { Box } from '@chakra-ui/react';
import { IDataInput } from './types/dataset.type';
import useDataset from './hooks/useData';

ChartJS.register(
  CategoryScale,  // x-axis
  LinearScale,    // y-axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  data: IDataInput[];
}

const LineChart: React.FC<Props> = ({ data }) => {
  const dataset: ChartData<"line", (number | Point | null)[], unknown> = useDataset(data);

  return (
    <Box width={1000}>
      <Line
        options={ options }
        data={ dataset }
        height="200px"
        width="1000px"
      />
    </Box>
  )
}

export default LineChart