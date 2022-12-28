import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import arrowUpIcon from "../../assets/icons/arrow-up.svg";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";

interface Props {
  label: string;
  isActive?: boolean;
  isExpanded?: boolean;
  onClick: () => void;
}

const DropdownItem: React.FC<Props> = ({ label, isActive, isExpanded, onClick }) => {
  return (
    <Flex
      minWidth="140px"
      padding="4px 12px"
      backgroundColor="background"
      border="1px solid #EAC1704D"
      justifyContent="space-between"
      alignItems="center"
      onClick={ onClick }
    >
      <Text fontSize="12px" fontFamily="Montserrat" fontWeight={500}>
        { label }
      </Text>

      {(isActive && isExpanded)
        ? <Image src={arrowDownIcon} width="12px" />
        : (isActive && !isExpanded)
          ? <Image src={ arrowUpIcon } width="12px" />
          : <></>
      }
    </Flex>
  )
}

export default DropdownItem