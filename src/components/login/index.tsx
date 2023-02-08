import React from 'react'
import { BaseContainer, LoginButton, MainContainer, Title } from './index.styles'
import useData from './useData'
import TextInput from '../reusables/atoms/TextInput';

const LoginForm = () => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    handleSubmit
  } = useData();

  return (
    <BaseContainer>
      <MainContainer>
        <Title>LOGIN</Title>

        <TextInput
          label="Username"
          value={ username }
          handleChange={ setUsername }
        />

        <TextInput
          label="Password"
          value={ password }
          handleChange={ setPassword }
          isPassword
        />
        
        <LoginButton onClick={ handleSubmit }>
          Login
        </LoginButton>
      </MainContainer>
    </BaseContainer>
  )
}

export default LoginForm