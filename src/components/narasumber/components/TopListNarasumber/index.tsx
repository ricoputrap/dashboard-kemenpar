import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import { Image, Stack, Text } from '@chakra-ui/react'
import useData from './useData'
import { TTopNarasumber } from '../../state/index.types'
import CircularChart from '../../../reusables/organisms/CircularChart'

const TopListNarasumber: React.FC = () => {
  const data: TTopNarasumber[] = useData();

  return (
    <Stack rowGap="16px">
      <Image src={ ChartLine } />
      <Text fontSize="20px" fontWeight={500}>
        TOP LIST NARASUMBER
      </Text>

      <CircularChart data={ data } />
    </Stack>
  )
}

export default TopListNarasumber