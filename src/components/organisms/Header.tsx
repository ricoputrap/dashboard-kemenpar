import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import HeaderLogos from '../molecules/HeaderLogos'
import Navbar from '../molecules/Navbar'
import headerLine from "../../assets/lines/header-line.svg";
import useWindowSize from '../../hooks/useWindowSize';

const Header: React.FC = () => {
  const { width } = useWindowSize();
  const headerHeight = useMemo(() => {
    if (width >= 1336) return "190px";
    return 0;
  }, [width]);

  return (
    <Box>
      <Box
        width="100vw"
        position="absolute"
        height={ headerHeight }
      >
        <Image
          src={ headerLine }
          width="100%"
          height="100%"
        />
      </Box>

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