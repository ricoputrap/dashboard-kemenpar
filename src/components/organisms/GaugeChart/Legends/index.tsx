import React from 'react'
import { TGaugeLegendItem } from '..'
import { Flex } from '@chakra-ui/react';
import LegendItem from '../LegendItem';

interface Props {
  data: TGaugeLegendItem[];
}

const Legends: React.FC<Props> = ({ data }) => {
  return (
    <Flex direction="column" rowGap="14px">
      {data.map(item => (
        <LegendItem
          key={ item.label }
          label={ item.label }
          value={ item.value }
          color={ item.color }
        />
      ))}
    </Flex>
  )
}

export default Legends