import React from 'react'
import { useNavigate } from "react-router-dom"
import BasePage from '../templates/BasePage'
import { Text } from '@chakra-ui/react';

const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  }

  return (
    <BasePage id="page-profile">
      <Text onClick={ backHome }>
        HOME
      </Text>
    </BasePage>
  )
}

export default ProfileView