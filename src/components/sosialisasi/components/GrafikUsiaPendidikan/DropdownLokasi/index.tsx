import React from 'react'
import { DropdownContainer, Label } from './index.styles'
import useData from './useData'
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