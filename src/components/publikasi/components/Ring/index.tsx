import { Circle } from '@chakra-ui/react';
import React from 'react'

interface Props {
  children: React.ReactNode;
}

const Ring: React.FC<Props> = ({ children }) => {
  return (
    <Circle size="154px" bg='rgba(234, 193, 112, 0.5)'>
      <Circle size="122px" bg="#112647">
        { children }
      </Circle>
    </Circle>
  )
}

export default Ring