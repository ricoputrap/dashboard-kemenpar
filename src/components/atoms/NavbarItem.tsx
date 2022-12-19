import { Box } from '@chakra-ui/react';
import React from 'react'

type Props = {
  label: string;
  path: string;
  isActive: boolean;
  onClick: (path: string) => void;
}

const NavbarItem: React.FC<Props> = ({
  label, path, isActive, onClick
}) => {
  return (
    <Box
      fontSize="12px"
      color={isActive ? "main" : "white"}
      fontWeight={isActive ? "700" : "400"}
      onClick={() => onClick(path)}
    >
      { label }
    </Box>
  )
}

export default NavbarItem