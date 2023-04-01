import { Box } from '@chakra-ui/react'
import React from 'react'
import Dropdown from '../../../../reusables/atoms/Dropdown';
import useData from './useData';

const DropdownJenisPelatihan: React.FC = () => {
  const { activeOption, options, handleChange } = useData();

  return (
    <Box width="200px">
      <Dropdown
        activeItem={ activeOption }
        options={ options }
        onChange={ handleChange }
      />
    </Box>
  )
}

export default DropdownJenisPelatihan