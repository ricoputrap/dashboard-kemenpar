import React from 'react'
import ReactDOM from 'react-dom/client'
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from 'react-router-dom';
import router from './utils/router';
import bgImg from "./assets/logo/logo-background.svg";
import './index.css'

const colors = {
  main: "#EAC170",
  white: "#FFFFFF",
  background: "#112647"
}

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box
        backgroundColor="background"
        color="white"
        fontFamily="Montserrat"
        fontStyle="normal"
        fontWeight="800"
        fontSize="20px"
        lineHeight="24px"
        >
        <Box
          id="root-Box"
          height="100vh"
          backgroundImage={`url(${bgImg})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <RouterProvider router={router} />
        </Box>
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
)
