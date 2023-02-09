import React, { useMemo } from 'react'
import { TDropdownItem } from '../../../../../types/utils.type'

const useDropdownOptions = (categories: string[]): TDropdownItem[] => {
  const dropdownOptions: TDropdownItem[] = useMemo(() => {
    return categories.map(category => ({
      label: category,
      value: category
    }))
  }, [categories]);

  return dropdownOptions;
}

export default useDropdownOptions