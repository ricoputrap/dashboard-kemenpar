import { Flex } from '@chakra-ui/react'
import React from 'react'
import HeaderLogos from '../molecules/HeaderLogos'

const Header: React.FC = () => {
  return (
    <Flex height="30px" direction="row">
      <HeaderLogos />
    </Flex>
  )
}

export default Header