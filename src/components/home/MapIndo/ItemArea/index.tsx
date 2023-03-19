import { Popover, PopoverContent, PopoverTrigger, Portal } from '@chakra-ui/react'
import React from 'react'
import { AreaBadge } from './index.styles';
import PopoverArea from '../PopoverArea';
import { TDataSetahun } from '../index.types';

interface Props {
  label: string;
  data: TDataSetahun[];
}

const ItemArea: React.FC<Props> = ({ label, data }) => {
  return (
    <Popover placement="right-start">
      <PopoverTrigger>
        <AreaBadge>{ label }</AreaBadge>
      </PopoverTrigger>

      <Portal>
        <PopoverContent
          width="154px"
          textAlign="center"
          padding="10px 12px"
          color="#112647"
          background="#E9C270"
        >
          <PopoverArea
            title={ label }
            data={ data }
          />
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default ItemArea