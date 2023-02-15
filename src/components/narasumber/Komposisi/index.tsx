import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BoxKomposisi from './components/BoxKomposisi'
import ChartLine from "../../../assets/lines/chart-line.svg"

const data: any[] = [
  { name: "AKADEMISI", value: 43 },
  { name: "PRAKTISI", value: 23 },
  { name: "KOMUNITAS", value: 2 },
  { name: "ASOSIASI", value: 2 }
]

const Komposisi: React.FC = () => {
  return (
    <Stack rowGap="20px">
      <Flex columnGap="16px">
        <Image src={ ChartLine } />
        <Text fontSize="15px" fontWeight={600} lineHeight="18px">
          KOMPOSISI NARASUMBER
        </Text>
      </Flex>

      <Flex gap="12px">
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