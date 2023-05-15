import { Flex } from '@chakra-ui/react';
import React from 'react'
import { Label } from './index.styles';

interface Props {
  hasData: boolean;
  bulan: string;
}

const LaporanItem: React.FC<Props> = ({ hasData, bulan }) => {
  const background = hasData ? "#EAC170" : "transparent";
  const color = hasData ? "#112647" : "#FFFFFF";
  const border = hasData ? "none" : "1.57px solid #FFFFFF";

  return (
    <Flex
      key={ bulan }
      minWidth="134px"
      height="34.44px"
      alignItems="center"
      justifyContent="center"
      background={ background }
      color={ color }
      border={ border }
    >
      <Label>
        { bulan }
      </Label>
    </Flex>
  )
}

export default LaporanItem