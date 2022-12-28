import React, { useMemo, useState } from 'react'
import { TDropdownItem } from '../../types/utils.type'
import { Box } from '@chakra-ui/react';
import DropdownItem from './DropdownItem';

interface Props {
  options: TDropdownItem[];
  activeItem: string;
  onChange: (item: string) => void;
}

const Dropdown: React.FC<Props> = ({ options, activeItem, onChange }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  
  const inactiveOptions = useMemo(
    () => options.filter(item => item.label != activeItem),
    [activeItem]
  );

  const toggleOptions = () => {
    setShowOptions(prevValue => !prevValue)
  }

  const onOptionClicked = (item: string) => {
    onChange(item);
    setShowOptions(false);
  }

  return (
    <Box>
      {/* ACTIVE ITEM */}
      <Box position="relative">
        <DropdownItem
          label={ activeItem }
          onClick={ toggleOptions }
          isExpanded={ showOptions }
          isActive
        />
      </Box>

      {/* OPTIONS */}
      {!showOptions ? <></> : (
        <Box position="absolute">
          {inactiveOptions.map(item => (
            <DropdownItem
              key={ item.label }
              label={ item.label }
              onClick={() => onOptionClicked(item.label)}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Dropdown