import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  value: number;
  label: string;
}

const StatMain: React.FC<Props> = ({ value, label }) => {
  return (
    <Box textAlign="center">
      <Text
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight={700}
        textAlign="center"
        lineHeight="20px"
      >
        { value }
      </Text>
      <Text
        fontFamily="Montserrat"
        fontSize="18px"
        fontWeight={400}
        textAlign="center"
        lineHeight="18px"
      >
        { label }
      </Text>
    </Box>
  )
}

export default StatMain