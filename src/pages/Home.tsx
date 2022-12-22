import React from 'react'
import { Box } from "@chakra-ui/react"
import Header from '../components/organisms/Header'

const Home: React.FC = () => {
  return (
    <Box id="page-home">
      <Header />
      <h1>HOME</h1>
    </Box>
  )
}

export default Home