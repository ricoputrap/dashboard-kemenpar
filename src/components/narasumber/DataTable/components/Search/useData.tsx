import React, { useState } from 'react'

interface ReturnValue {
  searchValue: string;
  handleChange: (value: string) => void;
}

const useData = (): ReturnValue => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (value: string) => {
    setSearchValue(value);
  }

  return { searchValue, handleChange }
}

export default useData