import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/organisms/Header'

const Sosialisasi: React.FC = () => {
  return (
    <Box
      backgroundColor="background"
      height="100vh"
      color="white"
      fontFamily="Montserrat"
      fontStyle="normal"
      fontWeight="800"
      fontSize="20px"
      lineHeight="24px"
    >
      <Header />
      <h1>SOSIALISASI</h1>
    </Box>
  )
}

export default Sosialisasi