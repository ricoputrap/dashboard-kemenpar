import React from 'react'
import { Flex, Text } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";

interface Props {
  label: string;
  isActive?: boolean;
  isExpanded?: boolean;
  onClick: () => void;
}

const DropdownItem: React.FC<Props> = ({ label, isActive, isExpanded, onClick }) => {
  return (
    <Flex
      minWidth="136px"
      padding="2px 12px"
      color="#112647"
      backgroundColor={ isActive ? "#EAC170" : "transparent" }
      border={ isActive ? "1px solid #EAC1704D" : "none" }
      justifyContent="space-between"
      alignItems="center"
      onClick={ onClick }
      borderRadius={ isActive ? "5px" : 0 }
    >
      <Text
        fontSize={ isActive ? "16px" : "12px"}
        fontFamily="Montserrat"
        fontWeight={500}
      >
        { label.toUpperCase() }
      </Text>

      {(isActive && isExpanded)
        ? <TriangleUpIcon color="#000000" width="12px" />
        : (isActive && !isExpanded)
          ? <TriangleDownIcon color="#000000" width="12px" />
          : <></>
      }
    </Flex>
  )
}

export default DropdownItem