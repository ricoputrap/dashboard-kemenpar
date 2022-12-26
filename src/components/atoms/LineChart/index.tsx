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
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { IDataInput } from './types/dataset.type';
import useDataset from './hooks/useData';
import charthLineImg from "../../../assets/lines/chart-line.svg";
import LineChartLegend from '../../molecules/LineChartLegend';

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
  legendPosition: "top" | "right" | "none";
}

const items = [
  { name: "SOSIALISASI", color: "gray" },
  { name: "PELATIHAN", color: "red" },
  { name: "PENDAMPINGAN", color: "yellow" },
  { name: "APRESIASI", color: "green" }
]

const LineChart: React.FC<Props> = ({ title, data, width, height, legendPosition = "none" }) => {
  const dataset: ChartData<"line", (number | Point | null)[], unknown> = useDataset(data);

  return (
    <Box width={ width }>
      <Box marginBottom="12px" paddingLeft="14px">
        <Image src={charthLineImg} />
      </Box>

      <Flex marginBottom="8px" paddingLeft="14px" justifyContent="space-between">
        <Heading
          margin={0}
          fontSize={18}
          fontFamily="Montserrat"
          fontWeight={500}
          color="white"
        >
          { title }
        </Heading>

        {legendPosition == "top" ? <LineChartLegend items={ items } position="top" /> : <></>}
      </Flex>

      <Box display="flex" alignItems="center">
        <Line
          options={ options }
          data={ dataset }
          height={ height }
          width={ width }
        />
        
        {legendPosition != "right" ? <></> : (
          <LineChartLegend items={ items } position="right" />
        )}
      </Box>
    </Box>
  )
}

export default LineChart