import React from 'react'
import useFilter from './useFilter'
import { Container, Label } from './index.styles';
import Dropdown from '../../../reusables/atoms/Dropdown';

const Filter: React.FC = () => {
  const { activeDPP, options, handleChange } = useFilter();

  return (
    <Container>
      <Label>DPP:</Label>
      <Dropdown
        activeItem={ activeDPP }
        options={ options }
        onChange={ handleChange }
      />
    </Container>
  )
}

export default Filter