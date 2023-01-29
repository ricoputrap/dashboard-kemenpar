import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import options from './options';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BoxChart, ChartPercent, ChartTitle, Container } from './index.styles';

ChartJS.register(ArcElement, Tooltip, Legend);

export type TGaugeLegendItem = {
  label: string;
  value: number;
  color: string;
}

interface Props {
  data: ChartData<"doughnut", number[], string>;
  title?: string;
  percent?: number;
  legend?: TGaugeLegendItem[];
}

const GaugeChart: React.FC<Props> = ({ data, title, percent, legend }) => {
  return (
    <Container>
      <BoxChart>
        <Doughnut data={ data } options={ options } />

        {(percent !== undefined) && (
          <ChartPercent>
            { percent }%
          </ChartPercent>
        )}

        <ChartTitle>
          { title }
        </ChartTitle>
      </BoxChart>

      {/* LEGEND */}
      {!!legend && (
        <Flex direction="column" rowGap="14px">
          {legend.map(item => (
            <Flex direction="column" rowGap="7px">
              {/* BOX & VALUE */}
              <Flex columnGap="8px" alignItems="center">
                <Box
                  width="12px"
                  height="12px"
                  background={ item.color }
                  border="1px solid #EAC170"
                ></Box>
                <Text fontSize="14px" fontWeight={800} lineHeight="18px">
                  { item.value }
                </Text>
              </Flex>

              {/* LABEL */}
              <Text fontSize="11px" fontWeight={500} lineHeight="13px" color="#EAC170">
                { item.label }
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Container>
  )
}

export default GaugeChart