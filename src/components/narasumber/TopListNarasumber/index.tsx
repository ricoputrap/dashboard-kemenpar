import React from 'react'
import ChartLine from "../../../assets/lines/chart-line.svg"
import { Image, Stack, Text } from '@chakra-ui/react'
import RowData from './components/RowData'

const data: any[] = [
  { name: "Nasrullah", value: 4.5 },
  { name: "Rusmin", value: 3 },
  { name: "Sri Susanti", value: 2.9 },
  { name: "Budi Setiawan", value: 2.5 },
  { name: "Udi Hartoko", value: 2 }
]

const TopListNarasumber: React.FC = () => {
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