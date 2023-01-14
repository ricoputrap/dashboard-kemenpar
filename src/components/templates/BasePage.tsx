import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../organisms/Header';

interface Props {
  id: string;
  children: React.ReactNode;
}

const BasePage: React.FC<Props> = ({ id, children }) => {
  return (
    <Box id={ id }>
      <Header />

      <Box marginTop="20px" padding="36px 56px">
        { children }
      </Box>
    </Box>
  )
}

export default BasePage;