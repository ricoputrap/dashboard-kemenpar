import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  year: number;
}

const StatYear: React.FC<Props> = ({ year }) => {
  return (
    <Box paddingY="6px" borderY="1px solid #EAC170">
      <Text
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight={700}
        lineHeight="24px"
        textAlign="center"
        color="#EAC170"
      >
        { year }
      </Text>
    </Box>
  )
}

export default StatYear