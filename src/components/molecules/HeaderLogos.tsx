import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

import logoKemenpar from "../../assets/logo/1-logo-kemenpar.png";
import logo77 from "../../assets/logo/2-logo-77.png";
import logoG20 from "../../assets/logo/3-logo-G20-(putih).png";
import logoWonderfull from "../../assets/logo/4-logo-Wonderfull-Indonesia-(Putih).png";
import logoWorld from "../../assets/logo/5-logo-World-Tourism-day-2022-(Putih).png";
import logoDesaWisata from "../../assets/logo/6-Desa-Wisata-(Putih).png";

const HeaderLogos: React.FC = () => {
  return (
    <Box padding="32px 38px">
      <Flex columnGap="10px">
        <Image src={ logoKemenpar } alt="logo-kemenpar" height={46} />
        <Image src={ logo77 } alt="logo-kemenpar" height={46} />
        <Image src={ logoG20 } alt="logo-kemenpar" height={46} />
        <Image src={ logoWonderfull } alt="logo-kemenpar" height={46} />
        <Image src={ logoWorld } alt="logo-kemenpar" height={46} />
        <Image src={ logoDesaWisata } alt="logo-kemenpar" height={46} />
      </Flex>
    </Box>
  )
}

export default HeaderLogos