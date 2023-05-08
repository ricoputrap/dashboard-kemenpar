import React, { useMemo } from 'react'
import { Item } from './index.styles'

interface Props {
  value: number;
  activeTahun: number;
  setTahun: (value: number) => void;
}

const FilterItem: React.FC<Props> = ({ value, activeTahun, setTahun }) => {
  const active: boolean = useMemo(() => {
    return value == activeTahun;
  }, [value, activeTahun]);

  const handleClick = () => {
    setTahun(value);
  }

  return (
    <div onClick={ handleClick }>
      <Item active={ active }>
        { value }
      </Item>
    </div>
  )
}

export default FilterItem