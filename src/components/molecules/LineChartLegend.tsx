import React, { useMemo } from 'react'
import { ILineChartLegendItem } from '../../types/charts.type'
import { Flex } from '@chakra-ui/react'
import LineChartLegendItem from '../atoms/LineChartLegendItem'

type Props = {
  items: ILineChartLegendItem[],
  position: "top" | "right"
}

type FlexProps = {
  direction: "row" | "column";
  rowGap: string;
  columnGap: string;
}

const LineChartLegend: React.FC<Props> = ({ items, position }) => {
  const { direction, rowGap, columnGap } = useMemo<FlexProps>(() => {
    if (position == "right") {
      return {
        direction: "column",
        rowGap: "12px",
        columnGap: "0px"
      }
    }
    return {
      direction: "row",
      columnGap: "12px",
      rowGap: "0px"
    }
  }, [position]);

  return (
    <Flex direction={ direction } rowGap={ rowGap } columnGap={ columnGap }>
      {items.map(({ label, color }) => (
        <LineChartLegendItem key={ label } label={ label } color={ color } />
      ))}
    </Flex>
  )
}

export default LineChartLegend