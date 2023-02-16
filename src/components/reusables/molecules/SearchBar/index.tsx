import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { InputField } from './index.styles'

interface Props {
  value: string;
  handleChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, handleChange }) => {
  return (
    <InputGroup>
      <InputField
        placeholder='Search all'
        variant='flushed'
        focusBorderColor="#EAC170"
        value={ value }
        onChange={e => handleChange(e.target.value)}
      />
      <InputRightElement
        children={
          <SearchIcon
            color='green.500'
            fontSize="15px"
          />
        }
      />
    </InputGroup>
  )
}

export default SearchBar