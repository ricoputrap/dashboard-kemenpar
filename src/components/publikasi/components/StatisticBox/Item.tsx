import { Flex, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  label: string;
  value: string;
}

const Item: React.FC<Props> = ({ label, value }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text fontSize="20px" fontWeight={400} textTransform="uppercase">
        { label }
      </Text>
      <Flex>
        <Text fontSize="20px" fontWeight={400}>:&nbsp;</Text>
        <Text fontSize="25px" fontWeight={600} width="80px">{ value }</Text>
      </Flex>
    </Flex>
  )
}

export default Item