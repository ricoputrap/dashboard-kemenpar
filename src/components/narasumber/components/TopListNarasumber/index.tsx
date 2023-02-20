import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import { Image, Stack, Text } from '@chakra-ui/react'
import RowData from './RowData'
import useData from './useData'
import { TTopNarasumber } from '../../state/index.types'

const TopListNarasumber: React.FC = () => {
  const data: TTopNarasumber[] = useData();

  return (
    <Stack rowGap="16px">
      <Image src={ ChartLine } />
      <Text fontSize="20px" fontWeight={500}>
        TOP LIST NARASUMBER
      </Text>

      <Stack rowGap="16px">
        {data.map((item, index) => (
          <RowData
            key={ index }
            name={ item.name }
            value={ item.value }
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default TopListNarasumber