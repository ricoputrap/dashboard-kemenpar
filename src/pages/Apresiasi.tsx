import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/organisms/Header'

const Apresiasi: React.FC = () => {
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
      <h1>APRESIASI</h1>
    </Box>
  )
}

export default Apresiasi;