import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  label: string;
  value: React.ReactNode;
}

const RowData: React.FC<Props> = ({ label, value }) => {
  return (
    <Flex columnGap="20px">
      <Text
        fontSize="20px"
        fontWeight={700}
        fontFamily="Montserrat"
        width="118px"
      >
        { label }:
      </Text>
      <Box>
        { value }
      </Box>
    </Flex>
  )
}

export default RowData