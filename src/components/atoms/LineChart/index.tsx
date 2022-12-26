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
  ChartData,
  Point,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { options } from './config';
import { Box, Heading, Image } from '@chakra-ui/react';
import { IDataInput } from './types/dataset.type';
import useDataset from './hooks/useData';
import charthLineImg from "../../../assets/lines/chart-line.svg";

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
  title: string;
  data: IDataInput[];
  width: number;
  height: number;
}

const LineChart: React.FC<Props> = ({ title, data, width, height }) => {
  const dataset: ChartData<"line", (number | Point | null)[], unknown> = useDataset(data);

  return (
    <Box width={ width }>
      <Box marginBottom="12px" paddingLeft="14px">
        <Image src={charthLineImg} />
      </Box>
      <Box marginBottom="14px" paddingLeft="14px">
        <Heading
          margin={0}
          fontSize={18}
          fontFamily="Montserrat"
          fontWeight={500}
          color="white"
        >
          { title }
        </Heading>
      </Box>
      <Line
        options={ options }
        data={ dataset }
        height={ height }
        width={ width }
      />
    </Box>
  )
}

export default LineChart