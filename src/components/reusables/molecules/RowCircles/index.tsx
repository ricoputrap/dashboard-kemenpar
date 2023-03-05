import { Flex } from '@chakra-ui/react';
import React from 'react'
import CircleItem from '../../atoms/CircleItem';
import { CircleContainer, Label, Value } from './index.styles';

interface Props {
  name: string;
  value: number;
}

const RowCircles: React.FC<Props> = ({ name, value }) => {
  const adjustedIndex: number = Number.isInteger(value)
    ? value - 1
    : Math.floor(value);

  return (
    <Flex alignItems="center">
      <Label>{ name }</Label>

      <CircleContainer>
        {[0, 1, 2, 3, 4].map(index => (
          <CircleItem
            key={ index }
            currentIndex={ index }
            adjustedIndex={ adjustedIndex }
            value={ value }
          />
        ))}
      </CircleContainer>

      <Value>{ value }</Value>
    </Flex>
  )
}

export default RowCircles