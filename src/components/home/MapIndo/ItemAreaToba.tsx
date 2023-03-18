import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Container = styled.div`
  position: absolute;
  background: #E9C270;
  border-radius: 10px;
  cursor: pointer;

  @media (min-width: 1110px) {
    left: 209px;
    top: 31px;
    width: 59px;
    height: 17px;
    font-size: 12px;
  }

  @media (min-width: 1280px) {
    left: 59px;
    top: 35px;
    width: 46px;
    height: 15px;
    font-size: 10px;
  }

  @media (min-width: 1310px) {
    left: 63px;
    top: 27px;
    width: 50px;
    height: 15px;
    font-size: 10px;
  }

  @media (min-width: 1440px) {
    left: 67px;
    top: 27px;
    width: 52px;
    height: 16px;
    font-size: 10px;
  }
`;

const ItemAreaToba: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}

export default ItemAreaToba