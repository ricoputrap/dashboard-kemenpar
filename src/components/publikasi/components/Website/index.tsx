import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"

const Website: React.FC = () => {
  return (
    <Stack id="website" rowGap="8px">
      <Image src={ ChartLine } />
      <Text
        fontSize="20px"
        fontWeight={600}
        color="#EAC170"
        textTransform="uppercase"
        marginTop="0 !important"
      >
        Website
      </Text>
      <Text
        fontSize="15px"
        fontWeight={400}
        lineHeight="15px"
        marginTop="0 !important"
      >
        16 ARTIKEL (FEATURES) DI
        <br/>www.indonesia.travel
      </Text>
    </Stack>
  )
}

export default Website