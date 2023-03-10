import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import Content from './Content';

interface Props {
  height: string;
  maxWidth?: string;
}

const DescriptionBox: React.FC<Props> = ({ height, maxWidth }) => {
  return (
    <Box
      padding="28px 8px 20px 28px"
      border="1px solid #EAC170"
      borderRadius="10px"
      minWidth="407px"
      height={ height }
    >
      <Flex
        direction="column"
        rowGap="8px"
        overflowY="scroll"
        height="100%"
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