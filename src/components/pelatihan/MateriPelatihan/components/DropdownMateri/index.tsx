import React from 'react'
import useData from './useData'
import Dropdown from '../../../../reusables/atoms/Dropdown';
import { Box } from '@chakra-ui/react';

const DropdownMateri: React.FC = () => {
  const { activeMateri, options, handleChange } = useData();

  return (
    <Box width="200px">
      <Dropdown
        activeItem={ activeMateri }
        options={ options }
        onChange={ handleChange }
      />
    </Box>
  )
}

export default DropdownMateri