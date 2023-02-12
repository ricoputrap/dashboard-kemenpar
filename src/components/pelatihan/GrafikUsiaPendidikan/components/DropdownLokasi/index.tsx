import React from 'react'
import useData from './useData'
import { DropdownContainer, Label } from './index.styles';
import Dropdown from '../../../../reusables/atoms/Dropdown';

const DropdownLokasi: React.FC = () => {
  const { options, lokasi, handleChange } = useData();

  return (
    <DropdownContainer>
      <Label>DPP</Label>
      <Dropdown
        activeItem={ lokasi }
        options={ options }
        onChange={ handleChange }
      />
    </DropdownContainer>
  )
}

export default DropdownLokasi