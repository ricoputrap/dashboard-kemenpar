import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import DoughnutChartContainer from "../DoughnutChart/DoughnutChartContainer";
import { TGenderData } from "../DoughnutChartPeserta/types/legends.types";
import LegendItem from "../DoughnutChartPeserta/LegendItem";

interface Props {
  chartData: TGenderData[];
  title: string;
  width?: number;
  fontSize?: number;
  thickness?: number;

  showLegend?: boolean;
  legendTitle?: string;
  // legendPosition currently always on bottom,
  // to be updated later
}

const DonutChart: React.FC<Props> = ({
  chartData, title, width, fontSize, thickness,
  showLegend = false,
  legendTitle = "",
}) => {
  return (
    <Stack width="193px">
      <Stack
        rowGap="12px"
        alignItems="center"
        padding="8px"
        borderBottom="1px solid #EAC170"
      >
        <DoughnutChartContainer
          data={ chartData }
          label="Jumlah Peserta"
          width={ width }
          fontSize={ fontSize }
          thickness={ thickness }
        />
        <Text
          fontSize="15px"
          fontWeight={500}
          textTransform="uppercase"
          textAlign="center"
        >
          { title }
        </Text>
      </Stack>

      {!!showLegend && (
        <Stack rowGap="4px" padding="4px 16px">
          <Text
            fontSize="15px"
            fontWeight={500}
            textTransform="uppercase"
          >
            { legendTitle }
          </Text>

          {chartData.map(data => (
            <LegendItem
              key={ data.label }
              value={ data.value }
              percent={ data.percent }
              label={ data.label }
              color={ data.color }
            />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default DonutChart