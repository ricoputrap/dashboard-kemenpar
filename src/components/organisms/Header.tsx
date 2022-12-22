import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import HeaderLogos from '../molecules/HeaderLogos'
import Navbar from '../molecules/Navbar'
import headerLine from "../../assets/lines/header-line.png";

const Header: React.FC = () => {
  return (
    <Box>
      <Image
        zIndex={1}
        src={ headerLine }
        alt="header-line"
        position="absolute"
        width="100vw"
        height="114px"
      />

      <Flex direction="row" justifyContent="space-between">
        <HeaderLogos />
        <Navbar />
      </Flex>
    </Box>
  )
}

export default Header