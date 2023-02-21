import React from 'react'
import useData from './useData'
import { Box } from '@chakra-ui/react';
import SearchBar from '../../../../../reusables/molecules/SearchBar';

const Search: React.FC = () => {
  const { searchValue, handleChange } = useData();

  return (
    <Box width="222px">
      <SearchBar
        value={ searchValue }
        handleChange={ handleChange }
      />
    </Box>
  )
}

export default Search