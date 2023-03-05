import { Circle } from '@chakra-ui/react';
import React from 'react'

interface Props {
  currentIndex: number;
  adjustedIndex: number;
  value: number;
}

const CircleItem: React.FC<Props> = ({ currentIndex, adjustedIndex, value }) => {

  const percentFilled: number = currentIndex < adjustedIndex
    ? 100
    : currentIndex > adjustedIndex
      ? 0
      : (value - adjustedIndex) * 100;

  return (
    <Circle
      key={ currentIndex }
      size="20px"
      backgroundImage={`
        linear-gradient(
          to right,
          #EAC170 ${percentFilled}%,
          #FFFFFF80 ${percentFilled}%
        )
      `}
    />
  )
}

export default CircleItem