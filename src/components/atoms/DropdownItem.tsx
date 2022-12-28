import { Box, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  label: string;
  onClick: () => void;
}

const DropdownItem: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Box
      minWidth="140px"
      padding="4px 12px"
      backgroundColor="background"
      border="1px solid #EAC1704D"
      onClick={ onClick }
    >
      <Text fontSize="12px" fontFamily="Montserrat" fontWeight={500}>
        { label }
      </Text>
    </Box>
  )
}

export default DropdownItem