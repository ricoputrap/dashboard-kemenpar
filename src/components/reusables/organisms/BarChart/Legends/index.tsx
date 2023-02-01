import { Flex } from '@chakra-ui/react'
import React from 'react'
import LegendItem from '../LegendItem'
import { TLegendItem } from '../index.types'

interface Props {
  data: TLegendItem[];
}

const Legends: React.FC<Props> = ({ data }) => {
  return (
    <Flex columnGap="20px">
      {data.map(item => (
        <LegendItem
          key={ item.label }
          label={ item.label }
          color={ item.color }
        />
      ))}
    </Flex>
  )
}

export default Legends