import { Stack } from '@chakra-ui/react'
import React from 'react'
import RowCircles from '../../molecules/RowCircles'

export type TCircularRowData = {
  name: string;
  value: number;
}

interface Props {
  data: TCircularRowData[];
  labelSize?: string;
  labelWidth?: string;
}

const CircularChart: React.FC<Props> = ({
  data,
  labelSize = "12px",
  labelWidth = "66px"
}) => {
  return (
    <Stack rowGap="16px">
      {data.map((item, index) => (
        <RowCircles
          key={ index }
          name={ item.name }
          value={ item.value }
          labelSize={ labelSize }
          labelWidth={ labelWidth }
        />
      ))}
    </Stack>
  )
}

export default CircularChart