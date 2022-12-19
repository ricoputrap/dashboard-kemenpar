import { Flex } from '@chakra-ui/react'
import React from 'react'
import HeaderLogos from '../molecules/HeaderLogos'
import Navbar from '../molecules/Navbar'

const Header: React.FC = () => {
  return (
    <Flex height="30px" direction="row" justifyContent="space-between">
      <HeaderLogos />
      <Navbar />
    </Flex>
  )
}

export default Header