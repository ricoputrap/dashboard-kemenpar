import React from 'react'
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { options } from './config';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { IDataInput } from './types/dataset.type';
import useData from './hooks/useData';
import chartLineImg from "../../../assets/lines/chart-line.svg";
import LineChartLegend from '../../molecules/LineChartLegend';
import Dropdown from '../../atoms/Dropdown';

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
  width: number | string;
  height: number;
  legendPosition: "top" | "right" | "none";
  filtering?: boolean;
}

const LineChart: React.FC<Props> = ({ title, data, width, height, legendPosition = "none", filtering = false }) => {
  const {
    dataset, labelsWithColor, dropdownOptions,
    activeCategory, changeCategory
  } = useData(data, filtering);

  return (
    <Box width={ width }>
      <Box marginBottom="12px" paddingLeft="14px">
        <Image src={chartLineImg} />
      </Box>

      <Flex
        marginBottom="-4px"
        paddingLeft="14px"
        paddingRight="32px"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Heading
          margin={0}
          fontSize={18}
          fontFamily="Montserrat"
          fontWeight={500}
          color="white"
        >
          { title }
        </Heading>

        {legendPosition == "top" ? <LineChartLegend items={ labelsWithColor } position="top" /> : <></>}

        {legendPosition != "right" ? <></> : (
          <Dropdown
            options={ dropdownOptions }
            activeItem={ activeCategory }
            onChange={ changeCategory }
          />
        )}
      </Flex>

      <Box display="flex" alignItems="center">
        <Line
          options={ options }
          data={ dataset }
          height={ height }
          width={ width }
        />
        
        {legendPosition != "right" ? <></> : (
          <LineChartLegend items={ labelsWithColor } position="right" />
        )}
      </Box>
    </Box>
  )
}

export default LineChart