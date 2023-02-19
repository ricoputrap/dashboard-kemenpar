import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BoxKomposisi from './BoxKomposisi'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import useData from './useData'
import { TKomposisiItem } from '../../state/index.types'


const Komposisi: React.FC = () => {
  const data: TKomposisiItem[] = useData();
  
  return (
    <Stack rowGap="20px">
      <Flex columnGap="16px">
        <Image src={ ChartLine } />
        <Text fontSize="15px" fontWeight={600} lineHeight="18px">
          KOMPOSISI NARASUMBER
        </Text>
      </Flex>

      <Flex justifyContent="space-between">
        {data.map(item => (
          <BoxKomposisi
            key={ item.name }
            name={ item.name }
            value={ item.value }
          />
        ))}
      </Flex>
    </Stack>
  )
}

export default Komposisi