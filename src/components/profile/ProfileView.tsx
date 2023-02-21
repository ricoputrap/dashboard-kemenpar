import React from 'react'
import { useNavigate } from "react-router-dom"
import BasePage from '../templates/BasePage'
import { Flex, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from "@chakra-ui/icons";

const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  }

  return (
    <BasePage id="page-profile">
      <Flex
        columnGap="16px"
        alignItems="center"
        _hover={{ cursor: "pointer" }}
      >
        <ArrowBackIcon height="24px" />
        <Text onClick={ backHome }>
          HOME
        </Text>
      </Flex>
    </BasePage>
  )
}

export default ProfileView