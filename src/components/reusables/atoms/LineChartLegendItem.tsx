import React from 'react'
import { ILineChartLegendItem } from '../../../types/charts.type'
import { Box, Flex, Text } from '@chakra-ui/react'

const LineChartLegendItem: React.FC<ILineChartLegendItem> = ({ label, color }) => {
  return (
    <Flex columnGap="9px" alignItems="center">
      <Box width="14px" height="14px" backgroundColor={color}></Box>
      <Text fontSize="15px" fontWeight="500" fontFamily="Montserrat">
        { label }
      </Text>
    </Flex>
  )
}

export default LineChartLegendItem