import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  name: string;
  value: string;
  color: string;
}

const DonutChart: React.FC<Props> = ({ name, value, color }) => {
  return (
    <Flex direction="column" alignItems="center" rowGap="4px">
      <Box
        width="90px"
        height="90px"
        position="relative"
        borderRadius="100%"
        background={ color }
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          width="64px"
          height="64px"
          borderRadius="100%"
          background="background"
          position="absolute"
          top="13px"
          left="13px"
        >
          <Text
            fontSize="18px"
            fontWeight={400}
          >
            { value }
          </Text>
        </Flex>
      </Box>

      <Text
        fontSize="12px"
        fontWeight={400}
        fontFamily="Montserrat"
      >
        { name }
      </Text>
    </Flex>
  )
}

export default DonutChart