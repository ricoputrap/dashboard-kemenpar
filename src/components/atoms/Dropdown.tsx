import React from 'react'
import { TDropdownItem } from '../../types/utils.type'
import { Box } from '@chakra-ui/react';
import DropdownItem from './DropdownItem';

interface Props {
  options: TDropdownItem[];
  activeItem: string;
  onChange: (item: string) => void;
}

const Dropdown: React.FC<Props> = ({ options, activeItem, onChange }) => {
  return (
    <Box>
      <DropdownItem label={ activeItem } onClick={() => {}} />

      {options.map(item => (
        <DropdownItem
          key={ item.label }
          label={ item.label }
          onClick={() => onChange(item.label)}
        />
      ))}
    </Box>
  )
}

export default Dropdown