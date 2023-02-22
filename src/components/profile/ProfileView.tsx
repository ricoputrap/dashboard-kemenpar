import React from 'react'
import { useNavigate } from "react-router-dom"
import BasePage from '../templates/BasePage'
import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import PersonImg from "../../assets/images/person.jpg"
import LogoutIcon from "../../assets/icons/logout.svg"
import { deleteCookie } from '../../utils/cookie';
import ProfileDetail from './ProfileDetail';

const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  }

  const doLogout = () => {
    deleteCookie("token");
    navigate("/login");
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

      <Flex paddingY="20px" height="600px" justifyContent="center">
        <Stack
          paddingY="46px"
          width="320px"
          alignItems="center"
          justifyContent="space-between"
          borderRight="1px solid white"
        >
          <Stack rowGap="8px" alignItems="center">
            <Image
              src={ PersonImg }
              borderRadius='full'
              boxSize='150px'
              objectFit="cover"
            />
            <Text
              fontSize="16px"
              lineHeight="20px"
              fontWeight={500}
            >
              admin@gmail.com
            </Text>
            <Button
              background="#EAC170"
              color="#000000"
              rightIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Stack>

          <Button
            leftIcon={<Image src={LogoutIcon} />}
            background="#EAC170"
            color="#000000"
            onClick={ doLogout }
          >
            Logout
          </Button>
        </Stack>

        <ProfileDetail />
      </Flex>
    </BasePage>
  )
}

export default ProfileView