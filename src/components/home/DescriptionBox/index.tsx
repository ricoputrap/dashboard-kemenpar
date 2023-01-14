import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import Content from './Content';

const DescriptionBox: React.FC = () => {
  return (
    <Box
      padding="28px 8px 20px 28px"
      width="fit-content"
      border="1px solid #EAC170"
      borderRadius="10px"
    >
      <Flex
        direction="column"
        rowGap="8px"
        overflowY="scroll"
        height="246px"
        width="407px"
        paddingRight="20px"
      >
        <Heading
          fontFamily="Montserrat"
          fontSize="25px"
          fontWeight={700}
          color="#EAC170"
        >
          DESKRIPSI
        </Heading>
        
        <Content />
      </Flex>
    </Box>
  )
}

export default DescriptionBox