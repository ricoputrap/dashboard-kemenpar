import React from 'react'
import { BaseContainer, LoginButton, MainContainer, Title } from './index.styles'
import Form from './components/Form';
import { Flex, Link } from '@chakra-ui/react';
import RememberMe from './components/RememberMe';
import useSubmit from './hooks/useSubmit';

const LoginForm = () => {
  const handleSubmit = useSubmit();

  return (
    <BaseContainer>
      <MainContainer>
        <Title>LOGIN</Title>
        <Form />

        <Flex justifyContent="space-between">
          <RememberMe />

          <Link
            href="#"
            color="#EAC170"
            fontSize="18px"
            fontWeight={400}
          >
            Forgot Password?
          </Link>
        </Flex>
        
        <LoginButton onClick={ handleSubmit }>
          Login
        </LoginButton>
      </MainContainer>
    </BaseContainer>
  )
}

export default LoginForm