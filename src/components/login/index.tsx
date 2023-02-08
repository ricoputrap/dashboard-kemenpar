import React from 'react'
import { BaseContainer, LoginButton, MainContainer, Title } from './index.styles'
import useData from './useData'
import TextInput from '../reusables/atoms/TextInput';

const LoginView = () => {
  const {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit
  } = useData();

  return (
    <BaseContainer>
      <MainContainer>
        <Title>LOGIN</Title>

        <TextInput
          label="Username"
          value={ username }
          handleChange={ handleChangeUsername }
        />

        <TextInput
          label="Password"
          value={ password }
          handleChange={ handleChangePassword }
          isPassword
        />
        
        <LoginButton onClick={ handleSubmit }>
          Login
        </LoginButton>
      </MainContainer>
    </BaseContainer>
  )
}

export default LoginView