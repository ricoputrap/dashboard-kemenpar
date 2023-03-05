import { Stack } from '@chakra-ui/react'
import React from 'react'
import RowCircles from '../../molecules/RowCircles'

type TCircularRowData = {
  name: string;
  value: number;
}

interface Props {
  data: TCircularRowData[];
}

const CircularChart: React.FC<Props> = ({ data }) => {
  return (
    <Stack rowGap="16px">
      {data.map((item, index) => (
        <RowCircles
          key={ index }
          name={ item.name }
          value={ item.value }
        />
      ))}
    </Stack>
  )
}

export default CircularChart