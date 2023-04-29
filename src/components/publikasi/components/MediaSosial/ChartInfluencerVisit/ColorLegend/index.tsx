import { Flex } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import ColorLegendItem from './ColorLegendItem'
import { mapColor } from './utils';

interface Props {
  categories: string[];
  colors: string[];
}

const ColorLegend: React.FC<Props> = ({ categories, colors }) => {
  const items = useMemo(() => mapColor(categories, colors), [categories, colors]);
  return (
    <div className="color-legend">
      <Flex columnGap="20px" alignItems="center">
        {items.map(item => (
          <ColorLegendItem
            key={item.label}
            label={item.label}
            color={item.color}
          />
        ))}
      </Flex>
    </div>
  )
}

export default ColorLegend