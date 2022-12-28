import React from 'react'
import { TDropdownItem } from '../../types/utils.type'

interface Props {
  options: TDropdownItem[];
}

const Dropdown: React.FC<Props> = ({ options }) => {
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown