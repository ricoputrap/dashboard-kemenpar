import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  label: string;
}

const ItemArea: React.FC<Props> = ({ label }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Text
        // fontSize="12px"
        fontWeight={500}
        color="black"
      >
        { label }
      </Text>
    </Flex>
  )
}

export default ItemArea