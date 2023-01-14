import { Box, Heading } from '@chakra-ui/react';
import React from 'react'

interface Props {
  title: string;
}

const KPIHeader: React.FC<Props> = ({ title }) => {
  return (
    <Box paddingY="18px">
      <Heading
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight={500}
        lineHeight="24px"
        textAlign="center"
        textTransform="uppercase"
        color="#FFFFFF"
      >
        { title }
      </Heading>
    </Box>
  )
}

export default KPIHeader