import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  label: string;
  color: string;
}

const ColorLegendItem: React.FC<Props> = ({ label, color }) => {
  return (
    <div className="color-legend-item">
      <Flex columnGap="7px" alignItems="center">
        <Box width="18px" height="18px" background={ color }></Box>

        <Text color="#FFFFFF" fontSize="11px" fontWeight={500}>
          { label }
        </Text>
      </Flex>
    </div>
  )
}

export default ColorLegendItem