import { Flex, Stack } from '@chakra-ui/react';
import React from 'react'

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

const NumberedList: React.FC<Props> = ({ data }) => {
  return (
    <Stack rowGap="20px">
      {data.map(item => (
        <Flex key={ item.label } columnGap="14px">
          <Flex
            justifyContent="center"
            alignItems="center"
            fontSize="27px"
            fontWeight={600}
            textAlign="center"
            width="80px"
            paddingY="10px"
            border="2px solid #EAC170"
            borderRadius="5px"
            lineHeight="37px"
          >
            { item.value }
          </Flex>

          <Flex
            alignItems="center"
            fontSize="27px"
            fontWeight={600}
            textTransform="uppercase"
            flex={1}
            paddingY="10px"
            paddingX="20px"
            border="2px solid #EAC170"
            borderRadius="5px"
            lineHeight="37px"
          >
            { item.label }
          </Flex>
        </Flex>
      ))}
    </Stack>
  )
}

export default NumberedList