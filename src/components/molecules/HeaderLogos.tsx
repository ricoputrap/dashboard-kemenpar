import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

import logoKemenpar from "../../assets/logo/1-logo-kemenpar.svg";
import logoWonderfull from "../../assets/logo/4-logo-Wonderfull-Indonesia-(Putih).svg";
import logoP3TB from "../../assets/logo/3-p3tb.svg";
import logoDesaWisata from "../../assets/logo/6-Desa-Wisata-(Putih).svg";

const HeaderLogos: React.FC = () => {
  return (
    <Box padding="32px 38px">
      <Flex columnGap="10px" alignItems="center">
        <Image src={ logoKemenpar } alt="logo-kemenpar" height={46} />
        <Image src={ logoWonderfull } alt="logo-kemenpar" height={46} />
        <Image src={ logoP3TB } alt="logo-kemenpar" height="32px" />
        <Image src={ logoDesaWisata } alt="logo-kemenpar" height={46} />
      </Flex>
    </Box>
  )
}

export default HeaderLogos