import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  label: string;
  width: string;
}

const ItemArea: React.FC<Props> = ({ label, width }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="14px"
      width={ width }
      background="#e9c270"
      borderRadius="5px"
    >
      <Text
        fontSize="12px"
        fontWeight={500}
        color="black"
      >
        { label }
      </Text>
    </Flex>
  )
}

export default ItemArea