import React from 'react'
import { ILineChartLegendItem } from '../../types/line-chart.type'
import { Flex } from '@chakra-ui/react'
import LineChartLegendItem from '../atoms/LineChartLegendItem'

type Props = {
  items: ILineChartLegendItem[],
  position: "top" | "right"
}

const LineChartLegend: React.FC<Props> = ({ items, position }) => {
  return (
    <Flex columnGap="12px">
      {items.map(({ name, color }) => (
        <LineChartLegendItem key={ name } name={ name } color={ color } />
      ))}
    </Flex>
  )
}

export default LineChartLegend