import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from 'react-router-dom';
import router from './utils/router';
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
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
