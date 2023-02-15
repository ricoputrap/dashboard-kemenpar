import React from 'react'
import useData from './useData'
import { Box } from '@chakra-ui/react';
import Dropdown from '../../../../reusables/atoms/Dropdown';

const DropdownPelatihan: React.FC = () => {
  const { activeItem, options, handleChange } = useData();

  return (
    <Box width="200px">
      <Dropdown
        activeItem={ activeItem }
        options={ options }
        onChange={ handleChange }
      />
    </Box>
  )
}

export default DropdownPelatihan