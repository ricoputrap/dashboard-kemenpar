import { Circle, Flex, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  name: string;
  value: number;
}

const RowData: React.FC<Props> = ({ name, value }) => {
  return (
    <Flex>
      <Flex width="66px" marginRight="12px" alignItems="center">
        <Text fontSize="12px" fontWeight={600} lineHeight="12px">
          { name }
        </Text>
      </Flex>

      <Flex columnGap="16px" alignItems="center" marginRight="32px">
        {[0, 1, 2, 3, 4].map(index => (
          <Circle
            key={ index }
            size="20px"
            backgroundImage="linear-gradient(
              to right,
              #EAC170 50%,
              #FFFFFF80 50%
            )"
          />
        ))}
      </Flex>

      <Flex alignItems="center" width="32px" justifyContent="center">
        <Text
          fontSize="20px"
          fontWeight={600}
          lineHeight="24px"
        >
          { value }
        </Text>
      </Flex>
    </Flex>
  )
}

export default RowData