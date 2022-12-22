import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import HeaderLogos from '../molecules/HeaderLogos'
import Navbar from '../molecules/Navbar'
import headerLine from "../../assets/lines/header-line.png";

const Header: React.FC = () => {
  return (
    <Box>
      {/* header line - left */}
      <Box
        id="header-line"
        height="112px"
        position="absolute"
        top={0}
        left={0}
        width="calc(50% - 150px)"
        borderBottom="2px solid #EAC170"
      ></Box>
      <Box
        id="header-line"
        height="114px"
        position="absolute"
        top={0}
        left={0}
        width="calc(50% - 150px)"
        borderBottom="2px solid #EAC170"
        filter="blur(4px)"
      ></Box>
      
      {/* header line - right */}
      <Box
        id="header-line"
        height="112px"
        position="absolute"
        top={0}
        right={0}
        width="calc(50% - 150px)"
        borderBottom="2px solid #EAC170"
      ></Box>
      <Box
        id="header-line"
        height="114px"
        position="absolute"
        top={0}
        right={0}
        width="calc(50% - 150px)"
        borderBottom="2px solid #EAC170"
        filter="blur(4px)"
      ></Box>

      {/* header content */}
      <Flex direction="row" justifyContent="space-between">
        <HeaderLogos />
        <Navbar />
      </Flex>

      {/* header title */}
      <Heading
        fontSize="18px"
        fontFamily="Montserrat"
        fontWeight={700}
        lineHeight="22px"
        textAlign="center"
        position="absolute"
        top={94}
        width="100vw"
      >
        KAMPANYE SADAR
        <br/>
        WISATA 5.0
      </Heading>
    </Box>
  )
}

export default Header